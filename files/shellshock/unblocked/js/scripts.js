const PROXYLINK = document.querySelector('.proxy-links');

const GETJSON = (str) => {
    if (!str) return false;
    let data;
    try {
        JSON.parse(str);
        data = JSON.parse(str);
    } catch (e) {
        return false;
    }
    return data;
};

const GETLINKS = () => {
    fetch('json/proxy-list.json')
    .then(response => response.text())
    .then(data => {
        let parsedData = GETJSON(data);
        if (parsedData) {
			parsedData.forEach(data => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.className = 'link-proxy';
				a.href = `https://${data}`;
				a.textContent = data;
				a.target = '_blank';
				li.appendChild(a);
				PROXYLINK.appendChild(li);
			});
        }
    });
};

GETLINKS();