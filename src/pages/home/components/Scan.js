import React, { PureComponent } from 'react';
import { ScanWrapper, ScanContent } from '../style';

class Scan extends PureComponent {
    render() { 
        return ( 
            <ScanWrapper>
                <img src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png' alt=' '/>
                <ScanContent>
                    <h2>下载简书手机App {">"}</h2>
                    <p>随时随地发现和创作内容</p>
                </ScanContent>
            </ScanWrapper>
         );
    }
}
 
export default Scan;