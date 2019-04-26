window.onload = main;

async function main() {
    let info = (await (await fetch("https://api.github.com/repos/gary-kim/open-ias-scoreboard/releases")).json())[0].assets;
    
    document.querySelectorAll('.download-links').forEach((curr) => {
        setLinks(curr, info);
    });
    console.log(info[0].assets)
}
async function getRelease(info, type) {
    return info.filter(current => current.content_type == type)[0];
}
async function setLinks(element, info) {
    let rinfo = await getRelease(info, element.getAttribute('download-type'));
    console.log(rinfo);
    element.href = rinfo.browser_download_url;
    element.innerText = rinfo.name;
}