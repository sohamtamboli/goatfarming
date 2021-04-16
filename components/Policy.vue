<template>
  <div>
    <v-container class="outer__container">
      <Heading
        :title="
          $store.state.language.language === `english`
            ? `Company Approach`
            : `कंपनी पद्धती`
        "
      />
      <div class="inner__container">
        <ol
          v-if="$store.state.language.language === `english`"
          class="ordered__list"
        >
          <li>The company will first give the information and counseling.</li>
          <li>
            If the Basic Paper file is going to be from the project company then
            you have to register and processing fee will be paid. If there is no
            project from the company, it will be outright rejected.
          </li>
          <ul class="unordered__list">
            <li>
              Preparation of bank proposal. Help with paperwork, submit a loan
              proposal and get it done.
            </li>
            <li>
              Constructing the shed after getting the bank loan, shed
              construction permit etc.
            </li>
            <li>
              Assistance for goat purchase (goat has to be bought by the
              customer himself)
            </li>
            <li>Assistance for vaccination and insurance protection.</li>
            <li>
              Guidance for fodder management, animal feed management, veterinary
              management, marketing management and financial management for the
              next 5 years.
            </li>
            <li>
              The time required for a bank loan and the grant received on it
              depends entirely on your civil code, all the paperwork, the rules
              of the bank and the time all the procedures and bank take. The
              company cannot set a time limit for that.
            </li>
            <li>
              The first person to register for direct investment will have all
              the projects completed and all the papers with government
              approval. There is no definite or binding period for that either.
            </li>
            <li>
              The investment in the direct investment will be finalized by
              discussing its return benefit and thus the agreement between the
              company investor and the project owner will be finalized by
              discussing the terms and conditions. The agreement is binding on
              all.
            </li>
          </ul>
        </ol>
        <ol v-else class="ordered__list">
          <li>कंपनी प्रथम माहिती आणि कौनसलिंग करणार.</li>
          <li>
            जर बेसिक पेपर फाइल प्रकल्प कंपनीकडून होणार असेल तरच आपण तुम्हाला
            नोंदणी करावी लागेल आणि प्रक्रिया शुल्क भरावे लागेल. जर कंपनीकडून
            प्रकल्प होणार नसेल तर ते पूर्णपणे नाकारले जाईल.
          </li>
          <ul class="unordered__list">
            <li>
              बँकेतील प्रस्तावाची तयारी. कागदपत्राच्या कामात मदत करणे, दोन
              प्रपोसल सादर करुन ते करुन देणे.
            </li>
            <li>
              बँक कर्ज मिळाल्यानंतर शेड बांधणे, शेड बांधकाम परवानगी इत्यादी सर्व
              करून ते उभारणे.
            </li>
            <li>
              शेड बांधकामानंतर शेळी खरेदीसाठी सहाय्य (शेळी स्वतः ग्राहकांनी विकत
              घ्यावी)
            </li>
            <li>लसीकरण आणि विमा संरक्षणासाठी सहाय्य.</li>
            <li>
              पुढील 5 वर्षांसाठी चारा व्यवस्थापन, पशुखाद्य व्यवस्थापन,
              पशुवैद्यकीय व्यवस्थापन, मार्केटिंग व्यवस्थापन आणि आर्थिक
              व्यवस्थापन यासाठी मार्गदर्शन.
            </li>
            <li>
              <b>
                (बँक लोन आणि त्यावरील अनुदानासाठी लागणारा वेळ पूर्णपणे तुमच्या
                सिविल कोड, तुमच्या सर्व कागदपत्रांची पुर्तता, बँकेचे नियम आणि
                सर्व कार्यपद्धती आणि बँक घेत असलेल्या वेळांवर अवलंबून आहे. कंपनी
                त्यासाठी वेळेची मर्यादा ठरवू शकत नाही.)</b
              >
            </li>
            <li>
              थेट गुंतवणूकीसाठी जे प्रथम नोंदणी करणार त्याच व्यक्तींना सर्व
              प्रकल्प पूर्ण सर्वच्या सर्व प्रोजेक्ट कागदपत्रे सरकारी मान्यतेसह
              असतील तर प्रथम येणाऱ्यास प्रथम या पद्धतीने बाजरामधून डायरेक्ट
              गुंतवणूक उभी करून देणार. त्यासाठी कोणताही निश्चित किंवा बंधनकारक
              कालावधी नाही.
            </li>
            <li>
              डायरेक्ट गुंतवणूकीमध्ये गुंतवणूक व त्याचा परतावा फायदा चर्चा करून
              अंतीम निर्णय एकत्र होणार असून त्या प्रकारे कंपनी गुंतवणूकदार व
              प्रोजेक्टमालक यांच्यामध्ये करार होणार त्यामधील अटी चर्चा करून
              अंतीम होणार आहे तो करार सर्वांना बंधनकारक आहे.
            </li>
          </ul>
        </ol>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.outer__container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.inner__container {
  padding: 1rem;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
.ordered__list {
  line-height: 2;
  font-size: 1.2rem;
}
.unordered__list {
  line-height: 2.5;
  padding: 0 1rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}
.heading {
  text-align: center;
  margin: 1rem 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
}
</style>
