<template>
  <div>
    <v-container class="preface__container">
      <Heading
        :title="
          $store.state.language.language === `english`
            ? `Preface`
            : `प्रस्तावना`
        "
      />
      <p
        v-if="$store.state.language.language === `english`"
        class="preface__para"
      >
        Goat Farming is a business which can be achieved with the help of less
        investment and also less space. In closed goat farming, the fodder
        required to feed the goats is given to them in the cowshed. Also, goats
        require less amount of food compared to other animals. In general, one
        cow would require the food that would be sufficient for 10 goats. Due to
        which, this business proves to be very beneficial. Diet, health of the
        goats and also the water regulation if properly managed, this business
        can prove to be a very beneficial business. In closed goat farming, the
        goats are kept in the same shed due to which the efforts are reduced
        down to a minimum which also results into their increase in weight. This
        is a more revised method in which we can also regulate their diets. In
        addition to this, we can also regulate their birth, diseases to increase
        our revenue and also increase our business. This can turn out to be a
        great method for all the goat farming businesses out there. In this
        method, there are two primary methods. The first part consists of a roof
        under the sunlight. The second part is adjoined to the first part but in
        this, there would be no roof present in this. The second part should be
        at least two times bigger than the first. The result to this would be
        increased business of the goat farming.
      </p>
      <p v-else class="preface__para">
        शेळीपालन हा एक व्यवसाय आहे जो कमी गुंतवणूकीसह आणि कमी जागेच्या मदतीने
        केला जाऊ शकतो. बंदिस्त शेळीपालनात शेळ्या पाळण्यासाठी लागणारा चारा
        त्यांना गोठ्यात दिला जातो. तसेच, इतर प्राण्यांच्या तुलनेत शेळ्यांना कमी
        प्रमाणात अन्न हवे असते. सर्वसाधारणपणे, एका गायीला 10 शेळ्यांना पुरेल
        एवढे अन्न हवे असते. यामुळे, हा व्यवसाय खूप फायदेशीर असल्याचे सिद्ध होते.
        आहार, शेळ्यांचे आरोग्य आणि पाण्याचे नियमन जर योग्य पद्धतीने केले गेले तर
        हा व्यवसाय खूप फायदेशीर व्यवसाय ठरू शकतो. बंद शेळीपालनात शेळ्या एकाच
        शेडमध्ये ठेवल्या जातात ज्यायोगे प्रयत्न कमीत कमी केले जातात आणि परिणामी
        त्यांचे वजन वाढते. ही एक अधिक सुधारित पद्धत आहे ज्यामध्ये आम्ही
        त्यांच्या आहारांचे नियमन देखील करू शकतो. याव्यतिरिक्त, आम्ही आमचा महसूल
        वाढविण्यासाठी आणि आपला व्यवसाय वाढविण्यासाठी त्यांच्या जन्म, रोगांचे
        नियमन देखील करू शकतो. तेथील सर्व शेळीपालनांच्या व्यवसायांसाठी ही एक
        उत्तम पद्धत आहे. या पद्धतीमध्ये, दोन प्राथमिक पद्धती आहेत. पहिल्या भागात
        सूर्यप्रकाशाखाली एक शेड असते. दुसरा भाग पहिल्या भागाशी जोडला गेला आहे
        परंतु यामध्ये या ठिकाणी छप्पर अस्तित्त्वात नाही. दुसरा भाग पहिल्यापेक्षा
        कमीतकमी दोन पट मोठा असावा. यामुळे शेळीपालन व्यवसाय वाढेल.
      </p>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.preface__container {
  margin-top: 2rem;
}

.preface__para {
  line-height: 2;
  font-size: 1.2rem;
  text-align: justify;
  padding: 0 1rem;
}

.preface__heading {
  text-align: center;
  margin: 1rem 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
}
</style>
