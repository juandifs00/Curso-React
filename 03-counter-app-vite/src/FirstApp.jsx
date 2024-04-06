import PropTypes from 'prop-types';

const getResult = (a, b) => {
  return (a*b)/(a+b);
}

export const FirstApp = ( {title, subTitle} ) => {

  //console.log(props);

  return (
    <>
      <h1>Hello, I'm Juandifs</h1>
      <h1>{ title }</h1>
      {/*<h1>Resultado: {getResult(15,45)}</h1>*/}
      {/*<code> { JSON.stringify(newMessaje) } </code>*/}
      <p>Soy algo que salío aquí</p>
      <p>{subTitle}</p>
    </>
  )
}
  

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}