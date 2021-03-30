<template>
  <div>
    <div class="cards__container">
      <div v-for="(plan, idx) in planData" :key="idx" class="card__wrapper">
        <v-card class="mx-auto" max-width="400">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            <span>{{ plan.name }}</span>
          </v-card-title>
          <!-- <CardTitle :titles="titles" /> -->

          <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
          <v-list dense>
            <v-list-item>
              <v-list-item-content>{{ plan.selfInvest }}:</v-list-item-content>
              <v-list-item-content class="align-end justify-center">
                {{ plan.selfInvestValue }}
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>{{ plan.bankLoan }}:</v-list-item-content>
              <v-list-item-content class="align-end justify-center">
                {{ plan.bankLoanValue }}
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>{{ plan.repay }}:</v-list-item-content>
              <v-list-item-content class="align-end justify-center">
                {{ plan.repayValue }}
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content
                >{{ plan.approxGoatNo }}:</v-list-item-content
              >
              <v-list-item-content class="align-end justify-center">
                {{ plan.approxGoatNoValue }}
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content
                >{{ plan.approxYearIncome }}:</v-list-item-content
              >
              <v-list-item-content class="align-end justify-center">
                {{ plan.approxYearIncomeValue }}
              </v-list-item-content>
            </v-list-item>
            <!-- <CardTable :plandata="planData" /> -->
          </v-list>

          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="show = !show">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { plans } from '@/assets/data/plans.json'
// import CardTitle from '@/components/cardSubComponents/CardTitle'
// import CardTable from '@/components/cardSubComponents/CardTable'
export default {
  data: () => ({
    planData: plans.planDetails,

    show: false,
  }),
}
</script>

<style lang="css" scoped>
.cards__container {
  display: flex;
  gap: 32px;
}
</style>
