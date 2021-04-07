<template>
  <!-- <div> -->
  <div class="plan__cards__container">
    <div
      v-for="(plan, idx) in planData"
      :key="idx"
      class="card__wrapper"
      :data-aos="plan.aosType"
      :data-aos-duration="plan.aosTime"
      :data-aos-delay="plan.aosDelay"
      data-aos-easing="ease-out-back"
    >
      <v-card class="mx-auto" :max-width="dynoWidth">
        <v-img :src="plan.img" height="200px"></v-img>

        <v-card-title>
          <span>{{ plan.name }}</span>
        </v-card-title>
        <!-- <CardTitle :titles="titles" /> -->

        <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->
        <v-list dense>
          <v-list-item>
            <v-list-item-content>{{ plan.selfInvest }}:</v-list-item-content>
            <v-list-item-content class="align-end justify-end text-right">
              {{ plan.selfInvestValue }}
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>{{ plan.bankLoan }}:</v-list-item-content>
            <v-list-item-content class="align-end justify-end text-right">
              <v-tooltip :disabled="!plan.tooltipText1" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span dark v-bind="attrs" v-on="on">
                    {{ plan.bankLoanValue }}
                  </span>
                </template>
                <span>{{ plan.tooltipText1 }}</span>
              </v-tooltip>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>{{ plan.repay }}:</v-list-item-content>
            <v-list-item-content class="align-end justify-end text-right">
              {{ plan.repayValue }}
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>{{ plan.approxGoatNo }}:</v-list-item-content>
            <v-list-item-content class="align-end justify-end text-right">
              {{ plan.approxGoatNoValue }}
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content
              >{{ plan.approxYearIncome }}:</v-list-item-content
            >
            <v-list-item-content class="align-end justify-end text-right">
              <v-tooltip :disabled="!plan.tooltipText2" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span dark v-bind="attrs" v-on="on">
                    {{ plan.approxYearIncomeValue }}
                  </span>
                </template>
                <span>{{ plan.tooltipText2 }}</span>
              </v-tooltip>
            </v-list-item-content>
          </v-list-item>
          <!-- <CardTable :plandata="planData" /> -->
        </v-list>

        <v-card-actions>
          <v-expansion-panels flat accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Explore <v-spacer />
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <v-divider></v-divider>
                  <v-container fluid>
                    <v-expansion-panels multiple accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header
                          >Business Plan<v-spacer
                        /></v-expansion-panel-header>
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
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.selfInvestValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.debt }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.debtValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.projectCost }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
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
                          >Expenses<v-spacer
                        /></v-expansion-panel-header>
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
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.constructionValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.playingCapital }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.playingCapitalValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.buyGoat }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.buyGoatValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.govTax }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.govTaxValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.companyFee }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
                                    {{ item.companyFeeValue }}
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    {{ item.agencyFee }}:
                                  </v-list-item-content>
                                  <v-list-item-content
                                    class="align-end justify-end text-right"
                                  >
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
  <!-- </div> -->
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
.plan__cards__container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 32px;
}

@media only screen and (max-width: 768px) {
  .plan__cards__container {
    flex-direction: column;
  }
}
</style>
