import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  constructor() { }

  getXml() : Promise<any> {
    return new Promise<any>((resolve, reject) => {

		let xhr = new XMLHttpRequest();
		let method = "GET";
		let url = "https://leyoarq.github.io/CMV/cmv_privado/JS/3-Junio/data.xml";

        xhr.onreadystatechange = function (event) {
            if (xhr.readyState !== 4) return;
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseXML);
            } else {
                reject(xhr.responseText);
            }
        };
        xhr.open(method, url, true);
        xhr.send();
        });
    }
}
