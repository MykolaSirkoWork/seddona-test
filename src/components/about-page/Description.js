import descImage from '../../assets/images/description-img.png';

const Description = () => {
  return (
    <div className="desc">
      <div className='container d-flex'>
        <div className="img-container">
          <img src={descImage} alt="description avatar" />
        </div>
        <div className="text-container">
          <h2 className='text-container__title'>Expanded description title goes here</h2>
          <p className='text-container__par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat id. Laoreet sit amet cursus sit amet dictum sit amet. Ultricies mi eget mauris pharetra et ultrices neque. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Fermentum dui faucibus in ornare quam. A diam maecenas sed enim ut sem viverra aliquet eget. Lacus vestibulum sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Justo laoreet sit amet cursus sit amet dictum. At risus viverra adipiscing at in tellus integer feugiat. </p>
          <p className='text-container__par'>Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Adipiscing bibendum est ultricies integer quis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Pretium nibh ipsum consequat nisl vel. Lectus proin nibh nisl condimentum.  </p>
          <p className='text-container__par'>Nec dui nunc mattis enim ut tellus. Euismod elementum nisi quis eleifend. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Nunc vel risus commodo viverra maecenas. </p>
        </div>
      </div>
    </div>
  )
}

export default Description;