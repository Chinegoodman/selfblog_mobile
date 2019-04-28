export function remset(designwidth){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / (designwidth/100) < 375 / (designwidth/100) ? 375 / (designwidth/100) : document.documentElement.clientWidth / (designwidth/100) +'px';

    console.log(document.documentElement.style.fontSize)
}