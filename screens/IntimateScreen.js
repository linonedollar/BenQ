import React from 'react';
import { ScrollView, StyleSheet,View,Text,Image } from 'react-native';

export default class intimate extends React.Component {
  static navigationOptions = {
    title: '貼心叮嚀',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.purpleArea}>
          <Text style={styles.purpleTitle}>危機應變原則：</Text>
          <Text style={styles.purpleText}>{`明碁材料/中原大學/匯來運動行銷，雙方為共同責任單位
當有意外事件發生，匯來運動行銷為警察單位的主要聯繫窗口
醫療服務為緊急救護站提供
緊急後送以最近之醫院
由大會服務台為緊急聯絡中心，通知受傷民眾家屬，負責答詢
匯來配置一名人員在醫院以處理傷患家屬聯繫、通報等事宜
危機處理小組視情況啟動危機處理機制
          `}</Text>
        </View>
        <View style={styles.purpleArea}>
          <Text style={styles.purpleTitle}>其他緊急狀況處理原則：</Text>
          <Text style={styles.purpleText}>{`參加者不慎發生意外，或個人身體突然不適
(1)傷病者告知身體狀況，由醫護站視狀況判定是否就醫
(2)若需就醫則啟動送醫處理程序
重大意外
(1)緊急連絡流程→匯來先行報警，將傷患送至醫院急救→通知患者家屬
(2)大會廣播停止一切活動
(3)工作人員協助疏散其他參加者
          `}</Text>
        </View><View style={styles.redArea}>
          <Text style={styles.redTitle}>送醫處理流程：</Text>
          <Text style={styles.redText}>{`協請醫護站人員支援
送醫後由緊急救護站服務人員/匯來運動行銷/福委會陪同就醫

狀況一：可立即出院
護士/醫療服務處人員返回醫護站並通知總指揮

狀況二：需住院
由匯來同仁陪同處理、辦理手續並即刻通知福委會，急救人員返回救護站協助處理後續事宜，福委會確認傷者身分後通知家屬
          `}</Text>
        </View><View style={styles.redArea}>
          <Text style={styles.redTitle}>緊急應變措施SOP：</Text>
          <Text style={styles.redText}>{`發生意外事故(無人員受傷之情況)
(1)當事故發生時，立即由最近區域的工作人員立即通報該區幹部，並逐一向上通報醫護組，醫護組立即前往事故發生地點，並通報總指揮
(2)發現事故之工作人員，立即於現場維護現場製化，避免人潮圍觀
(3)醫護組至事故現場現場了解狀況，並立即排解狀況，恢復活動進行順暢
發生意外事故(有人員受傷之狀況)
醫護組收到受傷人員事故狀況時，並立即告知醫院方，協同園方及總指揮一同前往事故現場，醫護人員於現場立刻處理受傷人員，必要時立即後送
          `}</Text>
        </View>
        <View style={styles.yellowArea}>
          <Text style={styles.purpleTitle}>急救規劃：</Text>
          <Text style={styles.purpleText}>{`
救護站人員1位、急救器材1式，救護車停放於會場後方
          `}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingBottom:'5%',
  },
  purpleArea:{
    flex:1,
    borderRadius: 4,
    borderWidth: 1.5,
    margin:'1%',
    borderColor: '#A200C6',
  },
  purpleTitle:{
    flex:1,
    paddingLeft:'2%',
    paddingTop:10,
    paddingBottom:10,
    fontSize:24,
    fontWeight: 'bold',
    color:'#AA17CB',
  },
  purpleText:{
    paddingLeft:'2%',
    fontSize:12,
    textAlign: 'justify',
    lineHeight: 15,
    color:'#AA17CB',
  },
  redArea:{
    flex:1,
    borderRadius: 4,
    borderWidth: 1.5,
    margin:'1%',
    borderColor: '#ff5050',
  },
  redTitle:{
    flex:1,
    paddingLeft:'2%',
    paddingTop:10,
    paddingBottom:10,
    fontSize:24,
    fontWeight: 'bold',
    color:'#ff5050',
  },
  redText:{
    paddingLeft:'2%',
    fontSize:12,
    textAlign: 'justify',
    lineHeight: 15,
    color:'#ff5050',
  },
  yellowArea:{
    flex:1,
    borderRadius: 4,
    borderWidth: 1.5,
    margin:'1%',
    borderColor: '#ffc000',
  },
  yellowTitle:{
    flex:1,
    paddingLeft:'2%',
    paddingTop:10,
    paddingBottom:10,
    fontSize:24,
    fontWeight: 'bold',
    color:'#ffc000',
  },
  yellowText:{
    paddingLeft:'2%',
    fontSize:12,
    textAlign: 'justify',
    lineHeight: 15,
    color:'#ffc000',
  }
});
