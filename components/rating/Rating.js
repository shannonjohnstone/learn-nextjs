import { Fragment } from 'react';

const Rating = ({ value: selected, name = 'rating' }) => {
  return (
    <span className='Rating'>
      {Array.from({ length: 5 }).map((item, i) => {
        return (
          <Fragment key={`${name}=${i}`}>
            <input
              type="radio"
              name={name}
              id={`${name}=${i}`}
              defaultChecked={5 - selected === i}
              key={`input-${i}`}
            />
            <label
              key={`label-${i}`}
              title={`${5 - i} star rating`}
              htmlFor={`${name}-${i}`}
            >
            </label>
          </Fragment>
        )
      })}
    </span>
  )
}

export default Rating;
