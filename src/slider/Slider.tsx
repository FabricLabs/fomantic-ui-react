import React, { createElement, CSSProperties, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { SliderProps } from './type';
import useSlider from '../_util/useSlider';
import uniq from '../_util/classNamesUniq';
import { useCss, useMap, useSize } from 'react-use';

const Slider = ({
  as = 'div',
  className,
  min = 0,
  max = 20,
  step = 1,
  start = 0,
  end = 20,
  range, // TODO: 待实现...
  labeled,
  labelType = 'number',
  labelButtom,
  labelDistance = 50,
  autoAdjustLabels = true,
  ticked,
  smooth,
  vertical = false,
  disabled,
  inverted,
  interpretLabel,
  onChange,
  onMove,
  onStart,
  children,
  ...props
}: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(start);
  const [fillStyles, { set: setFillStyle }] = useMap<CSSProperties>();
  const [thumbStyles, { set: setThumbStyle }] = useMap<CSSProperties>();
  const trackCss = useCss({ '&>iframe': { opacity: 0 } });
  const ref = useRef(null);

  const state = useSlider(ref, {
    start: (start - min) / (max - min),
    vertical,
    onScrubStop: (value) => {
      if (!disabled) {
        const startValue = value * (max - min) + min;
        if (step > 0) {
          onChange?.(Math.round(startValue / step) * step, Math.round(startValue / step) * step);
        } else {
          onChange?.(startValue, startValue);
        }
      }
    },
    onScrub: (value) => {
      if (!disabled) {
        const startValue = value * (max - min) + min;
        setSliderValue(startValue);
        if (step > 0) {
          onMove?.(Math.round(startValue / step) * step, Math.round(startValue / step) * step);
        } else {
          onMove?.(startValue, startValue);
        }
      }
    },
    onScrubStart: () => {
      onStart?.();
    },
  });

  useEffect(() => {
    if (step === 0 || smooth) {
      setFillStyle(vertical ? 'top' : 'left', '0%');
      setFillStyle(vertical ? 'bottom' : 'right', `${100 * (1 - state.value)}%`);
      setThumbStyle(vertical ? 'top' : 'left', `calc(${100 * state.value}% - 10.5px)`);
      setThumbStyle(vertical ? 'bottom' : 'right', 'auto');
    } else {
      setFillStyle(vertical ? 'top' : 'left', '0%');
      setFillStyle(
        vertical ? 'bottom' : 'right',
        `${100 * (1 - (Math.round(sliderValue / step) * step - min) / (max - min))}%`,
      );
      setThumbStyle(
        vertical ? 'top' : 'left',
        `calc(${(100 * (Math.round(sliderValue / step) * step - min)) / (max - min)}% - 10.5px)`,
      );
      setThumbStyle(vertical ? 'bottom' : 'right', 'auto');
    }
  }, [sliderValue]);

  const [trackElement, track] = useSize(() => <div className={classNames('track', trackCss)}></div>);

  if (!as) {
    as = 'div';
  }

  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const numLabels = (max - min) / (step === 0 ? 1 : step);

  const gapRatio = () => {
    let gapRatio = 1;
    if (autoAdjustLabels) {
      const trackLength = vertical ? track.height : track.width;
      let gapCounter = 1;
      if (trackLength && trackLength > 0) {
        while ((trackLength / numLabels) * gapCounter < labelDistance * 2) {
          if (!(numLabels % gapCounter)) {
            gapRatio = gapCounter;
          }
          gapCounter += 1;
        }
      }
    }
    return gapRatio;
  };

  let labelItems = [];

  for (let i = 0; i <= numLabels; i++) {
    let labelStr;
    if (interpretLabel) {
      labelStr = interpretLabel(i * step);
    } else {
      labelStr = labelType === 'number' ? i * step : alphabet[i % 26];
    }
    labelItems[i] = (
      <li
        key={i}
        className={classNames({ halftick: i % gapRatio() }, 'label')}
        style={{ [vertical ? 'top' : 'left']: `calc(((100% - 7px) - 7px) * ${(step / (max - min)) * i} + 7px)` }}
      >
        {i % gapRatio() ? null : labelStr}
      </li>
    );
  }

  return createElement(
    as,
    {
      ref,
      className: uniq(
        classNames(
          'ui',
          { 'bottom aligned': labelButtom, labeled, ticked, vertical, disabled, inverted },
          'slider',
          className,
        ),
      ),
      ...props,
    },
    <>
      <div className="inner">
        {trackElement}
        <div className="track-fill" style={fillStyles}></div>
        <div className="thumb" style={thumbStyles}></div>
      </div>
      {labeled && <ul className={classNames('auto', 'labels')}>{labelItems}</ul>}
    </>,
  );
};

Slider.displayName = 'Slider';

export default Slider;
