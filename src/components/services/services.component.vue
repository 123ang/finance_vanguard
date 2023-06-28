<!-- src/views/Home.vue -->
<template>
    <section class="section" id="services">
        <div class="container my-0">
            <div class="title bottom-deco">{{$t('Our Services')}}</div>
            <p>{{$t('The services we offer have been carefully crafted to take care of all of your accounting needs. Here are some of the highdivghts:')}}</p>
        </div>
        <div class="container">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div class="card-container">
                    <h4 class="title">{{$t('Bookkeeping')}}</h4>
                    <div class="content-container">
                        <div class="li-dot">{{$t('Preparation of full set accounts')}}</div>
                        <div class="li-dot">{{$t('Maintenance of proper accounting documentation')}}</div>
                    </div>
                </div>
                <div class="card-container">
                    <h4 class="title">{{$t('Financial Reporting')}}</h4>
                    <div class="content-container">
                        <div class="li-dot">{{$t('Preparation of Audited Financial Statement')}}</div>
                        <div class="li-dot">{{$t('Preparation of financial statements in XBRL (for Singapore entities)')}}</div>
                        <div class="li-dot">{{$t('Analytical review of financial statement')}}</div>
                        <div class="li-dot">{{$t('Handle auditor`s queries')}}</div>
                    </div>
                </div>
                <div class="card-container">
                    <h4 class="title">{{$t('Taxation')}}</h4>
                    <div class="content-container">
                        <div>{{$t('Calculation and submission of taxation for:')}}</div>
                        <div class="li-dot">{{$t('Individual')}}</div>
                        <div class="li-dot">{{$t('Company')}}</div>
                        <div class="li-dot">{{$t('Limited Liability Partnerships')}} </div>
                        <div class="li-dot">{{$t('Withholding Tax')}} </div>
                    </div>                            
                </div>
                <div class="card-container">
                    <h4 class="title">{{$t('Payroll')}}</h4>
                    <div class="content-container">
                        <div class="li-dot">{{$t('Calculation of monthly payroll')}} </div>
                        <div class="li-dot">{{$t('Submission of PCB, EPF and SOCSO for employee')}} </div>
                    </div>                            
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Services',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './services.styles.scss';
</style>