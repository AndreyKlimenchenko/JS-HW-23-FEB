document.body.style.margin = '0';
document.head.insertAdjacentHTML('beforeend', 
`<meta name="author" content="Андрей Клименченко FE108">`);
document.head.insertAdjacentHTML('beforeend', 
`<meta name="description" content="Домашнее задание">`);
document.head.insertAdjacentHTML('beforeend', 
`<title>Домашнее задание JS 8</title>`);
document.head.insertAdjacentHTML('beforeend', 
`<link rel="stylesheet" href="./style.css">`);
document.head.insertAdjacentHTML('beforeend', 
`<link rel="preconnect" href="https://fonts.gstatic.com">`);
document.head.insertAdjacentHTML('beforeend', 
`<link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">`);
document.head.insertAdjacentHTML('beforeend', 
`<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">`);
document.head.insertAdjacentHTML('beforeend', 
`<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">`);


const header = document.createElement('header');
const headerDiv = document.createElement('div');
const title = document.createElement('h1');
const titleInfo = document.createElement('p');
const mainDiv = document.createElement('div');
const mainDivLeft = document.createElement('div');
const mainDivRight = document.createElement('div');

const divType = document.createElement('p');
const divTitle = document.createElement('h2');
const divInfo = document.createElement('p');
const btn = document.createElement('button');

const divType2 = document.createElement('p');
const divTitle2 = document.createElement('h2');
const divInfo2 = document.createElement('p');
const btn2 = document.createElement('button');

btn.classList.add('btn1');
btn2.classList.add('btn2');


document.body.appendChild(header);
header.appendChild(headerDiv);
headerDiv.appendChild(title);
headerDiv.appendChild(titleInfo);

document.body.appendChild(mainDiv);
mainDiv.appendChild(mainDivLeft);
mainDiv.appendChild(mainDivRight);

mainDivLeft.appendChild(divType);
mainDivLeft.appendChild(divTitle);
mainDivLeft.appendChild(divInfo);
mainDivLeft.appendChild(btn);

mainDivRight.appendChild(divType2);
mainDivRight.appendChild(divTitle2);
mainDivRight.appendChild(divInfo2);
mainDivRight.appendChild(btn2);

title.innerHTML = `Choose Your Option`;
titleInfo.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;

divType.innerHTML = `FREELANCER`;
divType2.innerHTML = `STUDIO`;

divTitle.innerHTML = `Initially designed to`;
divTitle2.innerHTML = `Initially designed to`;

divInfo.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;
divInfo2.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`;

btn.innerHTML = `START HERE`;
btn2.innerHTML = `START HERE`;

headerDiv.style.display = 'flex';
headerDiv.style.flexDirection = 'column';
headerDiv.style.alignItems = 'center';
headerDiv.style.paddingTop = '120px';

mainDiv.style.display = 'flex';
mainDiv.style.justifyContent = 'center';
mainDiv.style.marginTop = '55px';

mainDivLeft.style.padding = '82px 95px';
mainDivLeft.style.display = 'flex';
mainDivLeft.style.flexDirection = 'column';
mainDivLeft.style.alignItems = 'center';
mainDivLeft.style.border = '1px solid #E8E9ED';

mainDivRight.style.padding = '82px 95px';
mainDivRight.style.display = 'flex';
mainDivRight.style.flexDirection = 'column';
mainDivRight.style.alignItems = 'center';
mainDivRight.style.backgroundColor = 'rgba(143, 117, 190, 1)';
mainDivRight.style.border = '1px solid transparent';

title.style.fontFamily = 'Arvo';
title.style.fontStyle = 'normal';
title.style.fontWeight = 'normal';
title.style.fontSize = '36px';
title.style.lineHeight = '48px';
title.style.textAlign = 'center';
title.style.margin = '0px';
title.style.color = '#212121';

titleInfo.style.fontFamily = 'Open Sans';
titleInfo.style.fontStyle = 'normal';
titleInfo.style.fontWeight = 'normal';
titleInfo.style.fontSize = '14px';
titleInfo.style.lineHeight = '26px';
titleInfo.style.textAlign = 'center';
titleInfo.style.margin = '10px 0px 0px 0px';
titleInfo.style.color = '#9FA3A7';

divType.style.fontFamily = 'Montserrat';
divType.style.margin = '0px';
divType.style.fontStyle = 'normal';
divType.style.fontStyle = 'normal';
divType.style.fontWeight = 'bold';
divType.style.fontSize = '12px';
divType.style.lineHeight = '15px';
divType.style.textAlign = 'center';
divType.style.letterSpacing = '2.4px';
divType.style.color = '#9FA3A7';

divType2.style.fontFamily = 'Montserrat';
divType2.style.margin = '0px';
divType2.style.fontStyle = 'normal';
divType2.style.fontWeight = 'bold';
divType2.style.fontSize = '12px';
divType2.style.lineHeight = '15px';
divType2.style.textAlign = 'center';
divType2.style.letterSpacing = '2.4px';
divType2.style.color = '#FFC80A';

divTitle.style.fontFamily = 'Arvo';
divTitle.style.margin = '19px 0px 0px 0px';
divTitle.style.fontStyle = 'normal';
divTitle.style.fontWeight = 'normal';
divTitle.style.fontSize = '36px';
divTitle.style.lineHeight = '46px';
divTitle.style.textAlign = 'center';
divTitle.style.color = '#212121';

divTitle2.style.fontFamily = 'Arvo';
divTitle2.style.margin = '19px 0px 0px 0px';
divTitle2.style.fontStyle = 'normal';
divTitle2.style.fontWeight = 'normal';
divTitle2.style.fontSize = '36px';
divTitle2.style.lineHeight = '46px';
divTitle2.style.textAlign = 'center';
divTitle2.style.color = '#FFFFFF';

divInfo.style.fontFamily = 'Open Sans';
divInfo.style.margin = '25px 0px 0px 0px';
divInfo.style.fontStyle = 'normal';
divInfo.style.fontWeight = 'normal';
divInfo.style.fontSize = '12px';
divInfo.style.lineHeight = '22px';
divInfo.style.textAlign = 'center';
divInfo.style.color = '#9FA3A7';

divInfo2.style.fontFamily = 'Open Sans';
divInfo2.style.margin = '25px 0px 0px 0px';
divInfo2.style.fontStyle = 'normal';
divInfo2.style.fontWeight = 'normal';
divInfo2.style.fontSize = '12px';
divInfo2.style.lineHeight = '22px';
divInfo2.style.textAlign = 'center';
divInfo2.style.color = '#FFFFFF';

btn.style.fontFamily = 'Montserrat';
btn.style.margin = '58px 0px 0px 0px';
btn.style.fontStyle = 'normal';
btn.style.fontWeight = 'bold';
btn.style.fontSize = '12px';
btn.style.lineHeight = '15px';
btn.style.textAlign = 'center';
btn.style.letterSpacing = '2.4px';
btn.style.borderRadius = '25px';
btn.style.cursor = 'pointer';
btn.style.padding = '15px 23px';

btn2.style.fontFamily = 'Montserrat';
btn2.style.margin = '58px 0px 0px 0px';
btn2.style.fontStyle = 'normal';
btn2.style.fontWeight = 'bold';
btn2.style.fontSize = '12px';
btn2.style.lineHeight = '15px';
btn2.style.textAlign = 'center';
btn2.style.letterSpacing = '2.4px';
btn2.style.borderRadius = '25px';
btn2.style.cursor = 'pointer';
btn2.style.padding = '15px 23px';