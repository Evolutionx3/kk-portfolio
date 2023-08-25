export const swiperStyles = [
  `
  .swiper-button-next, .swiper-button-prev {
    width: 40px;
    height: 64px;
    display:flex;
    justify-items:center;
    border-radius: 0.09094rem;
    background: linear-gradient(90deg, rgba(46, 29, 157, 0.22) 0%, rgba(46, 29, 157, 0.83) 57.44%, #2E1D9D 100%);
    margin-top: -10px;
  }
  .swiper-button-prev {
      right: 96px;
      left: auto;
  }

  .swiper-button-next {
      right: 22px;
  }
  .swiper-button-next svg {
    background-image: url("arrow-right.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  .swiper-button-next svg path, .swiper-button-prev svg path {
    display: none;
  }
  .swiper-button-prev svg {
    background-image: url("arrow-left.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (min-width: 1280px) {
    .swiper-button-next, .swiper-button-prev {
      margin-top: -80px;
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-button-prev {
      right: 72px;
    }
  }
`,
];
