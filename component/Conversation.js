import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const Conversation = () => {
  return (
    <ScrollView>
    <View style={StyleSheet.container}>
      <Text style={{ fontSize: 40, backgroundColor: '#fff200', color: 'black' }}> Arrrival Immigration</Text>
      <Text></Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black'}}> 1. Questioning </Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> What is your name?</Text>
      <Text style={{ fontSize: 18 }}> คุณชื่ออะไร</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> What is your arrival flight number?</Text> 
      <Text style={{ fontSize: 18 }}>	คุณเดินทางมากับเที่ยวบินอะไร?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Is this your first time in Thailand?</Text>
      <Text style={{ fontSize: 18 }}>	คุณเดินทางมาประเทศไทยเป็นครั้งแรกหรือไม่?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> What is your hotel name?</Text> 
      <Text style={{ fontSize: 18 }}>	โรงแรมของคุณชื่ออะไร?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> May I see your immigration card?</Text> 
      <Text style={{ fontSize: 18 }}> ขอดูหนังสือเดินทางของคุณหน่อยครับ/ ค่ะ?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> What is the purpose of your visit?</Text> 
      <Text style={{ fontSize: 18 }}>	วัตถุประสงค์ของการเดินทางคืออะไร?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> What kind of work do you do?</Text> 
      <Text style={{ fontSize: 18 }}>	คุณทำงานเกี่ยวกับอะไร</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Where are you going to stay in Thailand?</Text> 
      <Text style={{ fontSize: 18 }}>	คุณพักอยู่ที่ไหนระหว่างอยู่ในประเทศไทย?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Please fill in the address and contact detail of your relatives and friends.</Text> 
      <Text style={{ fontSize: 18 }}>	กรุณากรอกที่อยู่พร้อมชื่อ และเบอร์ติดต่อของญาติและเพื่อนของคุณ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You have to book accommodation before entering the country.</Text> 
      <Text style={{ fontSize: 18 }}>	คุณจองที่พักก่อนเดินทางเข้ามาในประเทศ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Please go to the Health Control Section.</Text> 
      <Text style={{ fontSize: 18 }}>	กรุณาไปด่านควบคุมโรคก่อน</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Could I see your vaccine certificate?</Text> 
      <Text style={{ fontSize: 18 }}>	ผม/ ฉัน ขอดูเอกสารการฉีดวัคซีนหน่อยครับ/ ค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Have you got your RT-PCR Covid-19 test?</Text> 
      <Text style={{ fontSize: 18 }}>	คุณมีผลตรวจ Covid-19 RT-PCR ไหมครับ</Text>
      <Text></Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}> 2. Inadmissible Case </Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You are not permitted to enter the Kingdom because you do not have a visa.</Text>
      <Text style={{ fontSize: 18 }}>	คุณไม่ได้รับอนุญาตให้เข้าราขอาณาจักร เพราะคุณไม่ได้รับการตรวจลงตรา</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> The type of visa does not meet the purpose of your visit.</Text>
      <Text style={{ fontSize: 18 }}>	ประเภทการตรวจลงตราของคุณไม่ตรงกับวัตถุประสงค์การเดินทาง</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You cannot apply for a visa here because your nationality needs a visa before coming to Thailand.</Text>
      <Text style={{ fontSize: 18 }}>	คุณไม่สามารถขอรับการตรวจลงตรา ณ ช่องทางอนุญาตได้ เนื่องจากสัญชาติของคุณต้องมีวีซ่ามาจากประเทศต้นทางก่อนเดินทาง</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You are not permitted to enter the kingdom because you have a record of overstaying and are prohibited from entering the Kingdom.</Text>
      <Text style={{ fontSize: 18 }}>	คุณไม่ได้รับอนุญาตให้เข้าราชอาณาจักรเพราะคุณมีประวัติอยู่การกำหนดอนุญาตและถูกสั่งห้ามราชอาณาจักร</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You are not permitted to enter the Kingdom because your passport has expired.</Text>
      <Text style={{ fontSize: 18 }}>	คุณไม่ได้รับอนุญาตให้เข้าราชอาณาจักรเพราะหนังสือเดินทางหมดอายุ</Text>
      <Text></Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>	3. Additional Cases</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Your passport is about to expire.</Text>
      <Text style={{ fontSize: 18 }}>	หนังสือเดินทางคุณใกล้จะหมดอายุ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Your visa has expired.</Text>
      <Text style={{ fontSize: 18 }}>	ตรวจลงตราของคุณหมดอายุ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Nationality passport holders are required to have a visa and you do not have one.</Text>
      <Text style={{ fontSize: 18 }}>	คุณไม่มีตรวจลงตรา สัญชาติของคุณจำเป็นต้องใช้ตรวจลงตราเพื่อเข้าประเทศ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You need a re-entry permit to enter Thailand.</Text>
      <Text style={{ fontSize: 18 }}>	คุณจะต้องมี re-entry เพื่อที่จะเข้าประเทศ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Your APEC card does not have Thailand on it, so it is not valid here.</Text>
      <Text style={{ fontSize: 18 }}>	บัตรเอเปค (APEC Card) ไม่ระบุชื่อประเทศไทยบนบัตร จึงไม่สามารถใช้ได้</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> How much money do you have on you now?</Text>
      <Text style={{ fontSize: 18 }}>	คุณมีเงินติดตัวมาจำนวนเท่าไหร่</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Do you have any financial statements?</Text>
      <Text style={{ fontSize: 18 }}>	คุณมีเอกสารแสดงฐานะทางการเงินหรือไม่</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Visa exemption is for tourism purposes only</Text>
      <Text style={{ fontSize: 18 }}>	การยกเว้นการตรวจลงตรามีไว้เพื่อการท่องเที่ยวเท่านั้น</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Why have you stayed in Thailand for a long time?</Text>
      <Text style={{ fontSize: 18 }}>	ทำไมคุณจึงอยู่ที่ประเทศไทยต่อเนื่องเป็นระยะเวลานาน</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Do you have a person of contact in Thailand?</Text>
      <Text style={{ fontSize: 18 }}>	คุณมีบุคคลที่สามารถติดต่อได้ในประเทศไทยหรือไม่</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Your travel record shows that you have misused a tourist visa.</Text>
      <Text style={{ fontSize: 18 }}>	คุณมีบุคคลที่สามารถติดต่อได้ในประเทศไทยหรือไม่</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> You are on the blacklist.</Text>
      <Text style={{ fontSize: 18 }}>	คุณมีรายชื่อในบัญชีต้องห้าม</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> Some of your information matches the information on the blacklist.</Text>
      <Text style={{ fontSize: 18 }}>	ข้อมูลบางอย่างของคุณตรงกับข้อมูลในบัญชีต้องห้าม</Text>
      <Text></Text>
      <Text style={{ fontSize: 18 }}> We have to send you to the Transit Section.</Text>
      <Text style={{ fontSize: 18 }}>	เราจำเป็นต้องส่งตัวคุณไปยังฝ่ายพิธีการเข้าเมือง</Text>
      <Text></Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}> 4. Example</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Hello.</Text>
      <Text style={{ fontSize: 18 }}> สวัสดีครับ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Hello.</Text>
      <Text style={{ fontSize: 18 }}> สวัสดีค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Could I see your passport?</Text>
      <Text style={{ fontSize: 18 }}> ผมขอดูหนังสือเดินทางหน่อยครับ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Here you are.</Text>
      <Text style={{ fontSize: 18 }}> นี่ค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> How long have you plan to stay in Thailand?</Text>
      <Text style={{ fontSize: 18 }}> คุณต้องการพำนักอยู่ในประเทศไทยนานเท่าไรครับ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> For 1 month.</Text>
      <Text style={{ fontSize: 18 }}> 1 เดือน ค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> What is the purpose of your visit?</Text>
      <Text style={{ fontSize: 18 }}> คุณมีวัตถุประสงค์อะไรในการเดินทางเข้าราชอาณาจักร</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> For travel.</Text>
      <Text style={{ fontSize: 18 }}> เพื่อการท่องเที่ยวค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Where will you stay?</Text>
      <Text style={{ fontSize: 18 }}> คุณจะพักอยู่ที่ใหนครับ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> At the Lee garden Hotel in Hat Yai.</Text>
      <Text style={{ fontSize: 18 }}> ที่โรงแรมลีการ์เด้นในหาดใหญ่</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Okay, Here's your passport.</Text>
      <Text style={{ fontSize: 18 }}> โอเค นี่หนังสือหนังสือเดินทางของคุณ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Thanks.</Text>
      <Text style={{ fontSize: 18 }}> ขอบคุณค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> My pleasure.</Text>
      <Text style={{ fontSize: 18 }}> ยินดีครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 40, backgroundColor: '#fff200', color: 'black' }}>Visa on Arrival</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1',color: 'black' }}>1. VOA Documents Preparation</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>You need to prepare a completed visa on arrival application form (TM.88)</Text>
      <Text style={{ fontSize: 18 }}>คุณต้องเตรียมเอกสารแบบตม.88</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>You need to prepare a fee of 2,000 baht.</Text>
      <Text style={{ fontSize: 18 }}>คุณต้องเตรียมค่าาธรรมเนียม 2,000 บาท</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>You need to prepare a return ticket within 15 days or a proof of exit by using other vehicles.</Text>
      <Text style={{ fontSize: 18 }}>คุณต้องเตรียมตั๋วเดินทางกลับภายใน 15 วันหรือเอกสารยืนยันการเดินทางออกโดยพาหนะอื่น</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}> 2. VOA Fee</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>The fee cannot be exempted or reduced.</Text>
      <Text style={{ fontSize: 18 }}>ค่าธรรมเนียมไม่สามารถยกเว้นหรือลดหย่อนได้</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>We do not accept credit cards.</Text>
      <Text style={{ fontSize: 18 }}>เราไม่รับบัตรเครดิต</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>We only accept cash in Thai baht.</Text>
      <Text style={{ fontSize: 18 }}>ค่าธรรมเนียมรับเฉพาะเงินสดสกุลบาทเท่านั้น</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}> 3. VOA Refusal</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>Your visa application has been refused because your purpose of visit is not for tourism.</Text>
      <Text style={{ fontSize: 18 }}>คุณไม่ได้รับการตรวจลงตราเนื่องจาก คุณไม่ได้มีวัตถุประสงค์เพื่อเข้ามาท่องเที่ยว</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>Your visa application has been refused because you are unable to show appropriate means of living.</Text>
      <Text style={{ fontSize: 18 }}>คุณไม่ได้รับการตรวจลงตราเนื่องจาก คุณไม่สามารถแสดงปัจจัยยังชีพที่เหมาะสมให้เจ้าหน้าที่ดูได้</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Your visa application has been refused because you have no specific address in Thailand.</Text>
      <Text style={{ fontSize: 18 }}>	คุณไม่ได้รับการตรวจลงตราเนื่องจากคุณไม่สามารถแสดงที่อยู่ชัดเจนขณะอยู่ในประเทศไทยได้</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>4. Example</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Hello, I would like to apply for a visa on arrival. Where should I start?</Text>
      <Text style={{ fontSize: 18 }}> สวัสดีครับ ฉันต้องการยื่นขอวีซ่า on arrival ฉันควรเริ่มต้นที่ไหน</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> You must complete this form and submit it with your ID photo.</Text>
      <Text style={{ fontSize: 18 }}> คุณต้องกรอกแบบฟอร์มนี้และส่งพร้อมรูปถ่าย ID ของคุณ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> What are the qualifications of an applicant?</Text>
      <Text style={{ fontSize: 18 }}> คุณสมบัติผู้สมัครมีอะไรบ้างครับ?</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> 1. Your nationality must be listed by the Minister.</Text>
      <Text style={{ fontSize: 18 }}> 1. สัญชาติของคุณต้องระบุโดยสถานทูต</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> 2. Your passport must be valid for not less than 6 months.</Text>
      <Text style={{ fontSize: 18 }}> 2. หนังสือเดินทางของคุณจะต้องมีอายุไม่ต่ำกว่า 6 เดือน</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> 3. You must show your return ticket and the return date stated on it must not be more than 15 days after your arrival date.</Text>
      <Text style={{ fontSize: 18 }}> 3. คุณต้องแสดงตั๋วขากลับและวันเดินทางกลับที่ระบุไว้จะต้องไม่เกิน 15 วันหลังจากวันที่เดินทางมาถึง</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> 4. You must be able to provide your definite address in Thailand.</Text>
      <Text style={{ fontSize: 18 }}> 4. คุณต้องสามารถระบุที่อยู่ที่แน่นอนของคุณในประเทศไทยได้</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> 5. You must carry cash equivalent to the amount of not less than 10,000 Baht per person or 20,000 Baht per family.</Text>
      <Text style={{ fontSize: 18 }}> 5. คุณต้องพกเงินสดจำนวนไม่น้อยกว่า 10,000 บาทต่อคน หรือ 20,000 บาทต่อครอบครัว</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> 6. You must not be an undesirable person according to Immigration Act B.E.2522</Text>
      <Text style={{ fontSize: 18 }}> 6. ต้องไม่เป็นบุคคลอันไม่พึงประสงค์ตามพระราชบัญญัติคนเข้าเมือง พ.ศ.2522</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> What's your nationality?</Text>
      <Text style={{ fontSize: 18 }}> คุณเป็นคนสัญชาติอะไร?</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> I'm Indian. Can I apply for the visa?</Text>
      <Text style={{ fontSize: 18 }}> ฉันเป็นคนอินเดีย ขอวีซ่าได้ไหม</Text>
      <Text> </Text><Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Yes.</Text>
      <Text style={{ fontSize: 18 }}> ได้ครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> How much is the fee?</Text>
      <Text style={{ fontSize: 18 }}> มีค่าธรรมเนียมเท่าไหร่ครับ?</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> 2000 Baht.</Text>
      <Text style={{ fontSize: 18 }}> 2000 บาท ครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> How long can I stay in Thailand with this visa?</Text>
      <Text style={{ fontSize: 18 }}> ฉันจะอยู่ในประเทศไทยด้วยวีซ่านี้ได้นานเท่าไร</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> 15 days from today onwards.</Text>
      <Text style={{ fontSize: 18 }}> 15 วัน ตั้งแต่วันนี้ครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Okay. But I don't have any photos. Where can I have one taken?</Text>
      <Text style={{ fontSize: 18 }}> โอเคครับ  แต่ฉันไม่มีรูปถ่าย  มีที่ไหนบ้างที่ฉันสามารถได้รูป 1 รูป</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> At a small booth over there and your left hand.</Text>
      <Text style={{ fontSize: 18 }}> ที่บูธเล็ก ๆ ทางซ้ายมือของคุณ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Thank you.</Text>
      <Text style={{ fontSize: 18 }}> ขอบคุณครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> You're welcome.</Text>
      <Text style={{ fontSize: 18 }}> ยินดีครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 40, backgroundColor: '#fff200', color: 'black' }}>Investigation and Suppression</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>1. Questioning</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Is this your first time in Thailand?</Text>
      <Text style={{ fontSize: 18 }}>คุณเดินทางมาประเทศไทยครั้งแรกหรือไม่</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> What is the purpose of your visit?</Text>
      <Text style={{ fontSize: 18 }}>คุณเดินทางมาเพื่อวัตถุประสงค์ใด</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> May I see your passport, please?</Text>
      <Text style={{ fontSize: 18 }}>ขอดูหนังสือเดินทางของคุณ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> May I conduct the search?</Text>
      <Text style={{ fontSize: 18 }}>ขออนุญาตตรวจค้น</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Who are you accompanying?</Text>
      <Text style={{ fontSize: 18 }}>คุณเดินทางมากับใคร</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> What was your last flight? When did you arrive in Thailand?</Text>
      <Text style={{ fontSize: 18 }}>คุณเดินทางมาจากเที่ยวบินอะไร เดินทางมาถึงประเทศไทยเมื่อไหร่</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>2. Arrest</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, color: 'red' }}>โครงสร้าง You are under arrest for…………(ตามด้วยข้อหา)</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You are under arrest for overstaying.</Text>
      <Text style={{ fontSize: 18 }}>คุณถูกจับกุมข้อหาอยู่เกินกำหนดอนุญาต</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You are under arrest for working without a work permit.</Text>
      <Text style={{ fontSize: 18 }}>คุณถูกจับกุมข้อหาทำงานโดยไม่ได้รับอนุญาต</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You are under arrest for forgery and use or possession of a fake passport.</Text>
      <Text style={{ fontSize: 18 }}>คุณถูกจับกุมข้อหาปลอมและใช้หรือมีไว้ซึ่งหนังสือเดินทางปลอม</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You are under arrest for giving a false statement to the officer.</Text>
      <Text style={{ fontSize: 18 }}>คุณถูกจับกุมข้อหาแจ้งข้อความอันเป็นเท็จต่อเจ้าหน้าที่</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>	3. Example</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Excuse me. My name is Police Captain Mana Manadee. I am an immigration police officer. Are you Mr. Don?</Text>
      <Text style={{ fontSize: 18 }}> ขออนุญาตครับ ผมชื่อ  มานะ มานาดี  ผมเป็นเจ้าหน้าที่ตำรวจตรวจคนเข้าเมือง  คุณคือดอนใช่ไหม</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Yes.</Text>
      <Text style={{ fontSize: 18 }}> ครับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Can you show me your passport or travel document? (Checking Identity) I have to inform you that you are under arrest for cheating the creditors, and this is your arrest warrant.</Text>
      <Text style={{ fontSize: 18 }}> คุณแสดงหนังสือเดินทางหรือเอกสารการเดินทางของคุณให้ผมดูหน่อย ผมต้องแจ้งให้คุณทราบว่าคุณอยู่ภายใต้การจับกุมในข้อหาโกงเจ้าหนี้ และนี่คือหมายจับของคุณ </Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Hmm, can I contact my lawyer?</Text>
      <Text style={{ fontSize: 18 }}> อืม ขอติดต่อทนายได้ไหม  </Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Of course, but I have to take you to my office to finish the paper work first, then I will take you to the inquiry office. You can contact and ask a lawyer to meet you at the police station.</Text>
      <Text style={{ fontSize: 18 }}> แน่นอน แต่ผมต้องไปส่งคุณที่สำนักงานของผมเพื่อทำเอกสารให้เสร็จก่อน แล้วฉันจะพาคุณไปที่สำนักงานสอบสวนและคุณสามารถติดต่อและขอให้ทนายความไปพบคุณที่สถานีตำรวจ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 40, backgroundColor: '#fff200', color: 'black' }}>Transit</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>1.Inadmissible Person </Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You have been denied entry to Thailand.</Text>
      <Text style={{ fontSize: 18 }}>คุณถูกปฏิเสธการเข้าเมือง</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You are prohibited from entering the Kingdom in accordance with the Thai Immigration Act.</Text>
      <Text style={{ fontSize: 18 }}>คุณเป็นบุคคลต้องห้ามเข้าเมืองตาม พ.ร.บ.คนเข้าเมือง</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You shall be deported from the Kingdom of Thailand in accordance with the Thai Immigration Act.</Text>
      <Text style={{ fontSize: 18 }}>คุณจะต้องถูกส่งตัวกลับออกนอกราชอาณาจักรไทยตาม พ.ร.บ.คนเข้าเมือง</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You have to travel back to your port of home country.</Text>
      <Text style={{ fontSize: 18 }}>	คุณต้องเดินทางกลับประเทศของคุณ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You must be resided at the holding room until your return flight is confirmed.</Text>
      <Text style={{ fontSize: 18 }}>	คุณต้องพักอยู่ในห้องพักรอส่งกลับ จนกว่าเที่ยวบินกลับจะได้รับการยืนยัน</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You have to sign a document for acknowledgement of the expulsion order (TM.35).</Text>
      <Text style={{ fontSize: 18 }}>	คุณต้องลงลายมือชื่อในเอกสารรับทราบการแจ้งคำสั่งออกนอกประเทศ (ตม.35)</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You can submit an appeal within 48 hours after receiving a legal notice.</Text>
      <Text style={{ fontSize: 18 }}>	คุณสามารถยื่นอุทธรณ์คำสั่งกลับไปนอกราชอาณาจักรได้ ภายใน 48 ชม. นับตั้งแต่ได้รับทราบคำสั่ง</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You are taken care of by the airline, at the moment.</Text>
      <Text style={{ fontSize: 18 }}>	ขณะนี้คุณอยู่ภายใต้การดูแลของสายการบิน</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You can contact your embassy through airline staff.</Text>
      <Text style={{ fontSize: 18 }}>	คุณสามารถติดต่อสถานทูตของคุณได้ผ่านเจ้าหน้าที่สายการบิน</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>	2. Example</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Hello.</Text>
      <Text style={{ fontSize: 18 }}> สวัสดีครับ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Hello. What's the problem? Why am I here?</Text>
      <Text style={{ fontSize: 18 }}> สวัสดีค่ะ, เกิดอะไรขึ้น ทำไมฉันต้องมาอยู่ที่นี่?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> I'm sorry to inform you that you're not permitted into the Kingdom of Thailand because your visa has expired and your nationality is required to have a visa to entrance Thailand.</Text>
      <Text style={{ fontSize: 18 }}> ผมขอโทษนะครับการเดินทางเข้ามาในประเทศไทยของคุณไม่ได้รับอนุญาตให้เข้ามาในราชอาณาจักรไทย เนื่องจากวีซ่าของคุณมันหมดอายุและเนื่องด้วยสัญชาติของคุณจำเป็นจะต้องมีการขอวีซ่าเข้ามาในประเทศไทยล่วงหน้า</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> So, what do I have to do?</Text>
      <Text style={{ fontSize: 18 }}> ดังนั้น, ฉันต้องทำอะไรบ้าง ?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> You will be deported back to the airport where you came from and if there is a Thai embassy there, you can apply for a visa.</Text>
      <Text style={{ fontSize: 18 }}> คุณจะต้องกลับไปยังท่าอากาศยานของคุณเพื่อที่จะกลับไปยังประเทศของคุณและทำเรื่องวีซ่าร้องขอเข้ามายังประเทศไทยไหม ณ สถานทูตไทยและคุณจะได้ใบตอบรับวีซ่าเข้ามาในประเทศไทย</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> I came from Malaysia. Can I apply for a visa there?</Text>
      <Text style={{ fontSize: 18 }}> ฉันมาจากมาเลเซีย, ฉันต้องไปขอวีซ่าที่นั้นใช่ไหม</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> There is a Thai embassy in Malaysia. I suggest you contact the embassy in Penang, Malaysia.</Text>
      <Text style={{ fontSize: 18 }}> ในประเทศมาเลเซียมีสถานทูตไทย ฉันแนะนำให้คุณไปติดต่อที่สถานทูตในปีนัง ประเทศมาเลเซีย</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> How long does it take before I can come back to Thailand again?</Text>
      <Text style={{ fontSize: 18 }}> ใช้เวลานานแค่ไหนที่ฉันจะสามารถกลับเข้ามาในประเทศไทยอีกครั้ง</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Once you get the visa you can come back again. Please wait for the airline staff. They will explain your flight details.</Text>
      <Text style={{ fontSize: 18 }}> เมื่อตอนที่คุณได้รับวีซ่า คุณสามารถกลับเข้ามาในประเทศไทยอีกครั้ง โปรดนั่งรอพนักงานสายการ บินที่นี่ครับ พวกเขาจะมาแจ้งรายละเอียดการแลกเปลี่ยนไฟล์ทให้กับคุณ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Thanks.</Text>
      <Text style={{ fontSize: 18 }}> ขอบคุณค่ะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 40, backgroundColor: '#fff200', color: 'black' }}>Departure Immigration</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>	1. Departure Immigration</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Do you have a visa for Thailand?</Text>
      <Text style={{ fontSize: 18 }}>	คุณมีตรวจลงตราสำหรับเดินทางเข้าประเทศไทยหรือไม่</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Will you re-enter Thailand after leaving?</Text>
      <Text style={{ fontSize: 18 }}>	คุณออกจากประเทศไทยแล้วคุณต้องการเดินทางกลับมาอีกหรือไม่</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You have overstayed. Please go to pay the fine.</Text>
      <Text style={{ fontSize: 18 }}>	คุณอยู่เกินกำหนดอนุญาต กรุณาไปจ่ายค่าปรับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> If you have lost your immigration card, please fill out a new one.</Text>
      <Text style={{ fontSize: 18 }}>	หากหาบัตร ตม.6 ไม่เจอ กรุณาเขียนใบใหม่</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>	2. Re-Entry Permit</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You can apply for a re-entry permit at the airport on the date of departure.</Text>
      <Text style={{ fontSize: 18 }}>	คุณสามารถทำ Re-entry ที่สนามบินได้ในวันที่เดินทางออก</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Without a re-entry permit, you have to get a new visa to enter Thailand.</Text>
      <Text style={{ fontSize: 18 }}>	หากไม่ทำ Re-entry ต้องขอวีซ่าใหม่เพื่อกลับเข้ามาในประเทศไทย</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> To keep your stay permit, a re-entry permit must be applied for before leaving Thailand.</Text>
      <Text style={{ fontSize: 18 }}>	คุณต้องทำ Re-entry ก่อนออกจากประเทศ เพื่อเป็นการรักษาสิทธิ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}> 3. Overstay</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> You have overstayed.</Text>
      <Text style={{ fontSize: 18 }}>	คุณอยู่ในราชอาณาจักรเกินกำหนดอนุญาต</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> The overstay fine is 500 baht per day, the maximum fine is 20,000 baht. You must</Text>
      <Text style={{ fontSize: 18 }}>	อยู่เกินกำหนดอนุญาต ต้องจ่ายค่าปรับวันละ 500 บาท สูงสุด 20,000 บาท คุณจึงจะสามารถเดินทางออกนอกประเทศได้</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> The total fine for your overstay is 1500 baht.</Text>
      <Text style={{ fontSize: 18 }}>	คุณต้องจ่ายค่าปรับเป็นเงินจำนวน 1500 บาท</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> Children under 15 years old are not charged a fine for overstaying.</Text>
      <Text style={{ fontSize: 18 }}>	เด็กอายุต่ำกว่า 15 ปีอยู่เกินกำหนดไม่ต้องจ่ายค่าปรับ</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}> If you cannot pay the fine, you will not be allowed to leave the country and will be prosecuted.</Text>
      <Text style={{ fontSize: 18 }}>	ถ้าไม่มีเงินจ่ายค่าปรับจะไม่สามารถเดินทาง ออกนอกประเทศได้ และจะต้องถูกดำเนินคดีตามกฎหมาย</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18 }}>If your overstay is more than 90 days, you will not be allowed to enter the country for 1 year.</Text>
      <Text style={{ fontSize: 18 }}>หากคุณอยู่เกิน 90 วัน คุณห้ามเข้าราชอาณาจักรห้ามเข้า 1 ปี</Text>
      <Text> </Text>
      <Text style={{ fontSize: 30, backgroundColor: '#42e0d1', color: 'black' }}>	4. Example</Text>
      <Text> </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Excuse me, May I see your passport, your boarding pass, and your completed departure card please?</Text>
      <Text style={{ fontSize: 18 }}> ขอโทษค่ะ ฉันขอดูหนังสือเดินทางของคุณ ตั๋วขึ้นเครื่องบินและบัตรขาออกที่กรอกเสร็จแล้วของคุณได้ไหมคะ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Certainly.</Text>
      <Text style={{ fontSize: 18 }}> แน่นอนได้เลย</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Ma'am, it is shown here that your visa has expired since last week.</Text>
      <Text style={{ fontSize: 18 }}> คุณผู้หญิง วีซ่าของคุณหมดอายุตั้งแต่อาทิตย์ที่แล้ว</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Oh, how is that possible? I didn't realize that. What do I need to do now?</Text>
      <Text style={{ fontSize: 18 }}> โอ้ เป็นไปได้ยังไง?  ฉันไม่ได้คิดถึงเรื่องนั้นว่า ตอนนี้ฉันต้องทำอะไร</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> You need to come with me for processing some documents.</Text>
      <Text style={{ fontSize: 18 }}> คุณมากับฉันเพื่อดำเนินการเอกสาร</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Do I need to pay anything?</Text>
      <Text style={{ fontSize: 18 }}> ฉันต้องจ่ายอะไรไหม?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Yes, I'm afraid. The fine for overstay is 500 Baht per day. You have 4 days overstay and the fine is 2,000 Baht.</Text>
      <Text style={{ fontSize: 18 }}> ใช่ ฉันเกรงว่า   ต้องจ่ายค่าปรับกรณีอยู่เกินกำหนดวันละ 500 บาท  คุณอยู่เกินกำหนด 4 วัน ต้องจ่ายปรับ 2,000 บาท</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Can I pay with a credit card?</Text>
      <Text style={{ fontSize: 18 }}> จ่ายด้วยบัตรเครดิตได้ไหมครับ?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> Sorry, we don't accept credit cards. Only cash in Thai Baht, ma'am.</Text>
      <Text style={{ fontSize: 18 }}> ขออภัย เราไม่รับบัตรเครดิต เงินสดเท่านั้นค่ะคุณผู้หญิง</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> What can I do? I only have American dollars?</Text>
      <Text style={{ fontSize: 18 }}> จะทำอย่างไร?  ฉันมีเงินดอลลาร์อเมริกัน</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> There are some exchange counters over there. Our officer will guide you the way.</Text>
      <Text style={{ fontSize: 18 }}> มีเคาน์เตอร์แลกเงินอยู่ตรงนั้น เจ้าหน้าที่ของเราจะดำเนินการให้คุณ</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Oh, thank you. And will I have any trouble if I return to Thailand next time?</Text>
      <Text style={{ fontSize: 18 }}> โอ้ ขอบคุณ และฉันจะมีปัญหาอะไรไหม หรือถ้าฉันกลับมาประเทศไทยในครั้งต่อไป?</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Immigration Officer</Text>
      <Text style={{ fontSize: 18 }}> No, ma'am. After you have paid the fine, your penalty will be terminated.</Text>
      <Text style={{ fontSize: 18 }}> ไม่ครับ คุณผู้หญิง หลังจากที่คุณได้ชำระค่าปรับแล้ว โทษของคุณจะถูกสิ้นสุด</Text>
      <Text></Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Alien</Text>
      <Text style={{ fontSize: 18 }}> Oh, that's good.</Text>
      <Text style={{ fontSize: 18 }}> เยี่ยมเลย</Text>
      <Text></Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
});
export default Conversation;