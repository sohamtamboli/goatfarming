<template>
  <div>
    <div class="cards__container">
      <div v-for="(plan, idx) in planData" :key="idx" class="card__wrapper">
        <v-card class="mx-auto" :max-width="dynoWidth">
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
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Explore <v-spacer />
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div>
                    <v-divider></v-divider>
                    <v-container fluid>
                      <v-expansion-panels multiple>
                        <v-expansion-panel>
                          <v-expansion-panel-header
                            >Business Plan</v-expansion-panel-header
                          >
                          <v-expansion-panel-content>
                            <v-row>
                              <v-col
                                v-for="(item, i) in businessData"
                                :key="i"
                                cols="12"
                              >
                                <v-list dense>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.selfInvest }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.selfInvestValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.debt }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.debtValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.projectCost }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.projectCostValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.note }}
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-list>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-header
                            >Expenses</v-expansion-panel-header
                          >
                          <v-expansion-panel-content>
                            <v-row>
                              <v-col
                                v-for="(item, i) in expensesData"
                                :key="i"
                                cols="12"
                              >
                                <v-list dense>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.construction }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.constructionValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.playingCapital }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.playingCapitalValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.buyGoat }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.buyGoatValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.govTax }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.govTaxValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.companyFee }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.companyFeeValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-list-item>
                                    <v-list-item-content>
                                      {{ item.agencyFee }}:
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                      {{ item.agencyFeeValue }}
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-list>
                              </v-col>
                            </v-row>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-container>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { plans } from '@/assets/data/plans.json'
export default {
  data: () => ({
    planData: plans.planDetails,
    businessData: plans.businessPlan,
    expensesData: plans.expenses,
    dynoWidth: 400,
    show: {},
    shows: true,
  }),
  mounted() {
    if (screen.width <= 768) {
      this.dynoWidth = 380

      if (screen.width <= 400) {
        this.dynoWidth = 340
      }
    }
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    toggleShow: function (idx) {
      console.log(this)
      debugger
      if (this.show.idx === false) {
        this.show.idx = !this.show.idx
      } else {
        this.show.idx = true
      }
    },
  },
}
</script>

<style lang="css" scoped>
.cards__container {
  display: flex;
  gap: 32px;
}
@media only screen and (max-width: 768px) {
  .cards__container {
    flex-direction: column;
  }
}
</style>
