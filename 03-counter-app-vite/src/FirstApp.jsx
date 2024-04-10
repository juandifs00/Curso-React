import PropTypes from 'prop-types';

const getResult = (a, b) => {
  return (a*b)/(a+b);
}

export const FirstApp = ( {title, subTitle, name} ) => {

  //console.log(props);

  return (
    <>
      {/*<h1>Hello, I'm Juandifs</h1>*/}
      <h1>{ title }</h1>
      {/*<h1>Resultado: {getResult(15,45)}</h1>*/}
      {/*<code> { JSON.stringify(newMessaje) } </code>*/}
      <p>Soy algo que salío aquí</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}
  

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  name: 'Juan Diego RG',
  subTitle: 'No hay un subtítulo',
  //title: 'No hay un título',
}