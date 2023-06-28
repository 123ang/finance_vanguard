<template>
    <section class="section" id="pricing">
        <div class="container title-container mt-0">
            <div class="title bottom-deco">{{$t('Meet Our Team')}}</div>
            <p>{{$t('Introducing our talented team of experts')}}</p>
        </div>
        <div class="container">

            <div class="team-row row gap-y-4">
                <div class="col-lg-4 team-col">
                    <div class="team-image">
                        <img src="@/assets/images/default/female.jpg" width="300" height="400" draggable=false>
                    </div>
                </div>
                <div class="col-lg-8 team-col">
                    <div class="content-container">
                        <h4>PS Ong</h4>
                        <div class="li-dot">{{$t('Professionally qualified member of ACCA with a Bachelor of Accounting degree from USM.')}}</div>
                        <div class="li-dot">{{$t('Diverse experience includes audit role in a Big Four Audit Firm, position as a Senior Financial Analyst in a Multinational Corporation, and a team lead role in a local company managing full set accounts for both local and foreign companies.')}}</div>
                        <div class="li-dot">{{$t('Proficient in various accounting software such as AutoCount, SAP, Xero, and Thaitax.')}}</div>
                        <div class="li-dot">{{$t('Awarded the MIA Best Accounting Student Award.')}}</div>
                    </div>
                </div>               
            </div>

            <div class="team-row row gap-y-4">
                <div class="col-lg-4 team-col">
                    <div class="team-image">
                        <img src="@/assets/images/default/female.jpg" width="300" height="400" draggable=false>
                    </div>
                </div>
                <div class="col-lg-8 team-col">
                    <div class="content-container">
                        <h4>YL Wong</h4>
                        <div class="li-dot">{{$t('Professionally qualified Chartered Accountant (CA) with member of MIA, ACCA & CTIM (Chartered Tax Institute of Malaysia).')}}</div>
                        <div class="li-dot">{{$t('Extensive experience in the accounting, audit & tax profession with clients in a range of industries')}}</div>
                        <div class="li-dot">{{$t('Proficient in Financial Reporting & Analysis, Budgeting & Financial Forecasting, Regulatory Compliance, Payroll & Tax Advisory.')}}</div>
                        <div class="li-dot">{{$t('Expertise in preparation full set of account including financial statements, tax submission, GST/SST, withholding tax, payroll, and etc.')}}</div>
                    </div>
                </div>               
            </div>

            <div class="team-row row gap-y-4">
                <div class="col-lg-4 team-col">
                    <div class="team-image">
                        <img src="@/assets/images/default/female.jpg" width="300" height="400" draggable=false>
                    </div>
                </div>
                <div class="col-lg-8 team-col">
                    <div class="content-container">
                        <h4>PE Wong</h4>
                        <div class="li-dot">{{$t('Possesses a rich blend of experience, having served in both commercial settings and accounting firms.')}}</div>
                        <div class="li-dot">{{$t('Expertise in managing a full set of accounts, which includes tasks like incorporation of the company, bookkeeping (both local and foreign currency), preparing management reports, and filing financial statements.')}}</div>
                        <div class="li-dot">{{$t('Proficient in submitting quarterly GST, yearly corporate tax, and annual returns with XBRL filings.')}}</div>
                        <div class="li-dot">{{$t('Skilled in managing Payroll duties with precision.')}}</div>
                        <div class="li-dot">{{$t('Technically proficient, with expertise in various accounting software such as Xero, Quickbook, UBS, Million, Sage 300, ERP Oracle, and Accpac.')}}</div>
                    </div>
                </div>               
            </div>

        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Team',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './team.styles.scss';
</style>