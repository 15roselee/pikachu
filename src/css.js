const string = `
.skin* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.skin*::before,
.skin*::after {
  box-sizing: border-box;
}
.skin { 
    background: #ffe600;
    min-height: 100vh;
  position: relative;
}
.nose {
  border: 10px solid red;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 100px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(10deg);
  }
  66% {
    transform: rotate(-10deg);

  }
  100% {
    transform: rotate(0deg);

  }
}
.nose:hover {
    transform-origin:center bottom ;
    animation: wave 300ms infinite linear;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 20px 20px 0 0;
  background: black;
}
.eye {
  border: 2px solid #000;
  background: #2e2e2e;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 60px;
  margin-left: -32px;
  border-radius: 100%;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 3px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  /* border: 1px solid red; */
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 130px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 5px solid black;
  width: 100px;
  height: 30px;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  background: #ffe600;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-25deg) translateX(-55px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 10px;
  height: 25px;
  position: absolute;
  bottom: -0.5px;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip::after {
  content: "";
  display: block;
  position: absolute;
  top: -8px;
  width: 95px;
  height: 10px;
  background: #ffe600;
}
.mouth .up .lip.left::after {
  left: 0px;
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0px;
  transform: rotate(25deg) translateX(55px);
}
.mouth .up .lip.right::before {
  left: -6px;
}
.mouth .up .lip.right::after {
  right: 0px;
}
.mouth .down {
  /* border: 1px solid rgb(155, 76, 76); */
  height: 170px;
  width: 100%;
  position: absolute;
  top: 8px;
  overflow: hidden;
}
.mouth .down .big-yuan {
  border: 5px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .big-yuan .small-yuan {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -170px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}
.face {
  border: 1px solid red;
  width: 88px;
  height: 88px;
  position: absolute;
  left: 50%;
  top: 185px;
  margin-left: -44px;
  z-index: 3;
}
.face>img{
  /* border: 1px solid red; */
  position: absolute;
  top: 50%;
  left: 50%;  
}
.face.left {
  border: 3px solid black;
  transform: translateX(-180px);
  background: #f00;
  border-radius: 44px;
}
.face.left>img{
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.face.right {
  border: 3px solid black;
  transform: translateX(180px);
  background: #f00;
  border-radius: 50%;
}

`;
export default string;
