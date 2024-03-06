import styles from "./Share.module.css";
import IconClose from "@/public/assets/icon-xmark.svg";

export default function ()
{
    return (
        <div className={ styles.dim }>
            <div className={ styles.popup }>
                <div className={ styles.partners }>
                    <span className={ styles.title }>{ "증명서 공유하기" }</span>
                    <p className={ styles.subTitle } dangerouslySetInnerHTML={{ __html: "아래 채용 플랫폼의 이력서에<br/>증명서 링크를 첨부해서 <b>스펙을 손쉽게 증빙하세요!</b>" }}/>
                </div>

            </div>
        </div>
    )
}