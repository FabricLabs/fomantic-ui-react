import classNames from 'classnames';
import React, { createElement, useEffect, useState } from 'react';
import { ProgressProps } from './type';

const Progress = ({
  as = 'div',
  indicating,
  active,
  progress,
  centered,
  className,
  label,
  percent = 0,
  autoSuccess,
  children,
  ...props
}: ProgressProps) => {
  if (!as) {
    as = 'div';
  }

  const percentVal = (per: number) => {
    let value: number;
    if (per >= 0 && per <= 100) {
      value = per;
    } else if (per > 100) {
      value = 100;
    } else {
      value = 0;
    }
    return value;
  };

  const [percents, setPercents] = useState(percentVal(percent));
  const [percentNum, setPercentNum] = useState(0);
  const [percentBefore, setPercentBefore] = useState(0);

  useEffect(() => {
    setPercentBefore(percents);
    setPercents(percentVal(percent));
  }, [percent]);

  useEffect(() => {
    const percentDiff = percents - percentBefore;

    let temp = percentBefore;

    const intervalFun = setInterval(() => {
      if (percentVal(percent) === temp) {
        clearInterval(intervalFun);
      } else {
        if (percentDiff > 0) {
          temp = temp + 1;
        } else if (percentDiff < 0) {
          temp = temp - 1;
        }
        setPercentNum(temp);
      }
    }, 300 / Math.abs(percentDiff));
  }, [percents]);

  const percentStr = `${percentNum}%`;

  const labelElement = label && <div className="label">{label.replaceAll('{percent}', percentNum.toString())}</div>;

  let progressStr: string = '';

  if (progress === true) {
    progressStr = percentStr;
  } else if (typeof progress === 'string') {
    progressStr = progress.replaceAll('{percent}', percentNum.toString());
  }

  const progressElement = progress && <div className={classNames('progress', { centered })}>{progressStr}</div>;

  return createElement(
    as,
    {
      className: classNames(
        'ui',
        { indicating },
        'progress',
        { active },
        { success: percentNum === 100 && autoSuccess },
        className,
      ),
      'data-percent': percent,
      ...props,
    },
    <>
      <div className="bar" style={{ width: percentStr }}>
        {progressElement}
      </div>
      {labelElement}
    </>,
  );
};

Progress.displayName = 'Progress';

export default Progress;
