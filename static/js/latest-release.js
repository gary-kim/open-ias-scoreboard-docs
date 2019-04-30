window.onload = main;

async function main() {
    let info = (await (await fetch("https://api.github.com/repos/gary-kim/open-ias-scoreboard/releases")).json())[0];
    
    document.querySelectorAll('.download-links').forEach((curr) => {
        setLinks(curr, info.assets);
    });
    
    let version_dom = document.querySelector('#version');
    version_dom.innerText = info.name + ' Changelog';
    version_dom.href = info.html_url;
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