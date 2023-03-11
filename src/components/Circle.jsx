export default function Circle (props) {
  const { val } = props.data;
  const diameter = `${ 100 * val }px`

  const circleStyle ={
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    backgroundColor: 'silver',
    opacity: 0.75,
  };

  return (
    <div style={circleStyle}></div>
  );
};
