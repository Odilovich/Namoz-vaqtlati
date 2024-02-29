"use strict"

// Variables started

let selectOption = document.querySelector('#regionName');

let baseURL = "https://islomapi.uz/api/present/day";
let tong = document.querySelector('.tong');
let quyosh = document.querySelector('.quyosh');
let peshin = document.querySelector('.peshin');
let asr = document.querySelector('.asr');
let shom = document.querySelector('.shom');
let xufton = document.querySelector('.xufton');
let mintaqa = document.querySelector('#mintaqa')

function mainRenderData(object) {
    object.forEach((el) => {
        let div = document.createElement('div');
        div.classList.add("card w-[210px] h-[340px] shadow-[0px_0px_20px_7px_#FFFFFF33] rounded-[25px] border-transparent bg-[#FFFFFF33]");
        div.innerHTML = `
        <p class="text-white text-[48px] font-bold text-center">${el.tong_saharlik}</p>
        `
    })
}

function renderData(loop){
    loop.forEach((el)=>{
        let div = document.createElement('option')
        div.setAttribute('value',`${el}`)
        div.innerHTML = `
            ${el}
        `

        selectOption.append(div);
    })
}

renderData(provencie)

async function findTime(el){
    try{
        let response = await fetch(baseURL+`?region=${el}`)
        let result = await response.json()
        mainRenderData(result)
    }catch(err){
        console.log(err);
    }
}

selectOption.addEventListener('change',(e)=>{
    findTime(e.target.value)
})