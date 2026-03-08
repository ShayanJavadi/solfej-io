@import "../../styles/variables";
@import "../../styles/functions";

.subscription - screen {
  overflow - x: hidden;
  &.is - android {

    

    .copy - container {

      .copy - line {
        padding - bottom: 0;
        padding - top: .3rem;
        
        .image - container {
          height: 2rem;
        }
      }
    }
  }


  .header - container {
    display: flex;
    justify - content: center;
    align - items: center;
    flex - direction: column;
    padding - top: 5 %;
    padding - bottom: 1 %;
    
    .image - container {
      display: flex;
      justify - content: center;
      align - items: center;
      flex: 1;
      margin - bottom: 1rem;

      img {
        width: 99 %;
        max - width: 400px;
      }
    }

    .text - container {
      width: 83 %;
      padding: .5rem 0;
      h1 {
        font - size: 1.3rem;
        text - align: center;
        line - height: 29px;
      }
    }
    
    .header - text {
      height: unset;

      h1 {
        font - size: 1rem;
      }
    }
    h1 {
      width: 100 %;
    }
  }

  .copy - container {

    .copy - line {
      display: flex;
      flex: 4;
      padding: .8rem 1rem;
     
      .image - container {
        flex: 1;
        display: flex;
        padding - left: 5px;
        height: 3rem;
        @media(max - height: 655px) {
          flex: .7;
        }

        img {
          height: 92 %;
          width: auto;
          @media(max - height: 655px) {
            height: 71 %;
            width: auto;
          }
        }
      }

      .text - container {
        flex: 4;
        display: flex;
      }
    }
  }

  .price - plans - container {
    display: flex;
    flex - direction: row;
    justify - content: center;
    height: 12rem;
    @media(max - height: 600px) {
      height: 10rem;
    }
    .price - plan {
      &: first - of - type {
        margin - right: .9rem;
      }

      display: flex;
      flex - direction: column;
      margin - bottom: .3rem;
      box - shadow: 0px 4px 1px rgba(0, 0, 0, 0.02);
      border: 3px solid transparent;
      width: 37 %;
      @media(max - height: 655px) {
        margin - bottom: .6rem;
      }
      &.active {
        border: 3px solid #00D9CD;
        border - radius: 5px;
        box - shadow: 0px 4px 1px rgba(0, 217, 205, 0.25);

        .price - copy - container {
          border - radius: 0!important;
        }

        .deal - header {
          border - radius: 0!important;
        }
      }

      &.no - header {
        .price - copy - container {
          border - radius: 5px;
        }
      }

      
      .deal - header {
        display: flex;
        background: #00D9CD;
        padding: 2px 0;
        justify - content: center;
        align - items: center;
        color: #fff;
        font - weight: bold;
        padding: 5px 0;
        font - size: 16px;
        border - top - right - radius: 5px;
        border - top - left - radius: 5px;
      }

      .price - copy - container {
        &.added - height {
          padding - top: 29px;
        }

        border - top: none;
        border: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        height: 100 %;
        flex - direction: column;
        border - bottom - left - radius: 5px;
        border - bottom - right - radius: 5px;
      }

      .price - plan - left {
        display: flex;
        flex: 1;
        flex - direction: column;
        justify - content: flex - end;

        h1 {
          font - size: 26px;
          text - align: center;

          @media(max - height: 655px) {
            font - size: 24px;
          }
        }

        .pill {
          margin - top: .3rem;
          width: 76 %;
          margin - left: .7rem;
          height: 19px;
          @media(max - height: 655px) {
            height: 15px;
          }
          p {
            font - size: 12px;
          }
        }
      }
      .price - plan - right {
        display: flex;
        flex: 1;
        flex - direction: column;
        justify - content: center;

        p {
          text - align: center;
          @media(max - height: 655px) {
            font - size: 15px;
          }
          &: nth - of - type(2) {
            margin - top: .3rem;
            color: rgba(68, 68, 68, 0.7);
            font - size: 14px;
            font - weight: normal;
            @media(max - height: 655px) {
              font - size: 12px;
            }
          }
        }
      }
    }
  }

  .onboarding - slides - container {
    display: flex;

    .is - draggable {
      overflow: unset!important;
    }
    & > div {
      flex: 1;
    }

    .carousel {
      display: flex;
      padding - top: 1.5rem;
      @media(max - width: 320px) {
        padding - top: .5rem;
      }


      & > div {
        flex: 0 0 100 %;
        justify - content: center;
        align - items: center;
        display: flex;
        flex - direction: column;

        img {
          max - width: 100 %;
          @media(max - width: 320px) {
            width: 50 %;
          }
        }

        h2 {
          padding - top: .6rem;
          text - align: center;
          width: 90 %;
        }

        p {
          padding - bottom: 1rem;
          padding - top: .3rem;
          font - size: 14px;
          line - height: 24px;
          text - align: center;
          width: 70 %;
          opacity: .8;
        }
      }
    }
  }

  .carousel - dots - container {
    display: flex;
    justify - content: center;
    align - items: center;
    flex: 1;
    @media(max - width: 320px) {
      flex: unset;
    }


    .dot {
      width: 12px;
      height: 12px;
      background: #C4C4C4;
    }

    .dot: nth - of - type(1) {
      &.active {
        background: $primary;
      }
    }

    .dot: nth - of - type(2) {
      margin: 0 1rem;
      &.active {
        background: $yellow;
      }
    }

    .dot: nth - of - type(3) {
      &.active {
        background: $secondary;
      }
    }
  }

  .line -break-container {
    display: flex;
    flex: .5;
    justify - content: center;
    align - items: center;

    div {
      width: 80 %;
      height: 1px;
      background: #999999;
      opacity: .8
    }
  }

  .copy - container {
    display: flex;
    flex: 3;
    margin - bottom: 1rem;
    flex - direction: column;
    justify - content: center;
    align - items: center;
    font - size: 14px;

    @media(max - height: 655px) {
      .copy - line {
        font - size: 12px;
      }
    }

    p {
      font - weight: normal;
    }
    p: first - of - type {
      margin - bottom: .5rem;
      font - weight: bold;

    }

    .sub {
      font - size: 14px;
      opacity: .7;
    }

    @media(max - width: 320px) {
      font - size: 14px;
    }
  }
  
  .buttons - container {
    display: flex;
    flex - direction: column;
    padding: 0 2rem;
    justify - content: center;
    height: 4rem;

    .no - thanks - button {
      p {
        color: #4c4c4c
      }
    }

    .trial - copy {
      height: 3rem;
      flex - direction: column;
      justify - content: flex - start;
      align - items: center;
      display: flex;

      &.monthly {
        justify - content: center;
      }

      p {
        font - size: 14px;
        font - weight: normal;
        @media(max - width: 320px) {
          font - size: 12px;
        }

      }
      p.bold {
        font - weight: bold;
        margin - bottom: .3rem;
      }
    }
  }

  .tos - container {
    display: flex;
    flex: 1;
    justify - content: center;
    align - items: center;
    font - weight: bold;
    flex - direction: column;
    .copy - container {
      p {
        width: 80 %;
        color: #999;
        line - height: 26px;
        font - weight: normal;
        font - size: 12px;
      }
    }


    a {
      color: rgba(170, 170, 170, 1);
      text - decoration: none;
      font - size: 12px;
    }

    span {
      margin: 0 .4rem;
      color: rgba(170, 170, 170, .5);
      font - size: 12px;
    }
  }
}