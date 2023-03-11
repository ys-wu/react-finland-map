export default function Circle (props) {
  const { val, zoom } = props.data;
  const diameter = `${ 20 * val * Math.log(zoom) }px`

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
}
