export default class Svg {
    static exchange(_selector: string) {
        const elementWithSVG =
            document.querySelector<HTMLImageElement>(_selector);
        const url = elementWithSVG?.src || '';

        const onCallback = (response: string) => {
            const tempElement = document.createElement('div');

            tempElement.innerHTML = response;
            const svg = tempElement.querySelector('svg');

            if (!svg) return;
            const parentElement = elementWithSVG?.parentNode;

            if (parentElement) {
                parentElement.insertBefore(svg, elementWithSVG);
                parentElement.removeChild(elementWithSVG);
            }
        };

        readSVGFile(url, onCallback);

        function readSVGFile(
            fileUrl: string,
            _callback: (response: string) => void
        ) {
            if (!fileUrl) return;
            if (!(_callback instanceof Function)) return;
            const xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = () => {
                if (xhttp.readyState !== 4) return;
                const response = xhttp.responseText;

                _callback(response);
            };

            xhttp.open('GET', fileUrl, true);
            xhttp.send();
        }
    }
}
