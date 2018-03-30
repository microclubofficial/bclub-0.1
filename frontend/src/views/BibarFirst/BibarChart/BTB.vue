<template>
<div>
   <article class="bibar-box bibar-boxindex1">
                <div class="bibar-indexDisplay">
                    <div class="bibar-indexDisplay-header">
                        <div class="logopic"><img src="../../../assets/img/logo-coin-BTC.png"></div>
                        <div class="logonameEnglish">BTC</div>
                        <div class="logonameChinese">比特币</div>
                    </div>
                    <a href="#" class="btn btn-default"><i class="iconfont icon-add-sm"></i> 关注</a> </div>
                <!--数-->
                <div class="bibar-indexDisplay-data"> <i class="iconfont icon-USD"></i> <span class="bibar-indexDisplay-dollar">11,122.44</span> <span class="bibar-indexDisplay-rmb"><i class="iconfont icon-yueden"></i> <i class="iconfont icon-CNY"></i> 70,728.18</span> <span class="bibar-indexDisplay-den"><i class="iconfont icon-denyu"></i> <i class="iconfont icon-BTC"></i> 1</span> </div>
                <!--涨跌-->
                <div class="bibar-indexDisplay-trend">
                    <div class="bibar-indextrend green"> <span class="num">+6.65%</span> <i class="iconfont icon-angleup-bold"></i> </div>
                    <div class="bibar-indextrend red"> <span class="num">-6.65%</span> <i class="iconfont icon-angledown-bold"></i> </div>
                </div>
                <div class="clear hline"></div>
                <!--比值-->
                <div class="bibar-indexDisplay-datamore">
                    <div class="col-sm-6">
                        <dl>
                            <dt>币值</dt>
                            <dd> <i class="iconfont icon-dollar"></i> 187,908,833,387
                                <div class="sprit-12 bg-green ml10">第一名</div>
                            </dd>
                            <dd> <i class="iconfont icon-yueden"></i> <i class="iconfont icon-rmb"></i> 1,194,921,666,949.60 </dd>
                            <dd> <i class="iconfont icon-yueden"></i> <i class="iconfont icon-btb"></i> 16,889,245.94 </dd>
                        </dl>
                        <dl>
                            <dt>占全球总市值</dt>
                            <dd> 40.18
                                <div class="bibar-uipress"><span class="w40p"></span></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>流通数量</dt>
                            <dd> <i class="iconfont icon-btb"></i> 116,894,562 </dd>
                        </dl>
                        <dl>
                            <dt>流通率</dt>
                            <dd> 80.45%
                                <div class="bibar-uipress"><span class="w90p"></span></div>
                            </dd>
                        </dl>
                    </div>
                    <div class="col-sm-6">
                        <dl>
                            <dt>交易量(24h)</dt>
                            <dd> <i class="iconfont icon-dollar"></i> 7,595.055,762.96
                                <div class="sprit-12 bg-green ml10">第一名</div>
                            </dd>
                            <dd> <i class="iconfont icon-yueden"></i> 48,297,339,349.47 </dd>
                            <dd> <i class="iconfont icon-btb"></i> 682,643,61 </dd>
                        </dl>
                        <dl>
                            <dt>换手率</dt>
                            <dd> 4.04%
                                <div class="bibar-uipress"><span class="w10p"></span></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>总发行量</dt>
                            <dd> <i class="iconfont icon-btb"></i> 21,000.000 </dd>
                        </dl>
                    </div>
                </div>
                <div class="clear hline"></div>
                <article class="bibar-indexDisplay-chart">
                    <div class="bibar-indexDisplay-chartTAB">
                    </div>
                    <div class="clear hline"></div>
                    <!--chart-->
                    <div id="mainChart" :style="{width:'780px',height:'450px'}"></div>
                </article>
            </article>
</div>
</template>
<script>
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'
import $ from 'jquery'

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)

export default{
  name: 'bibar',
  data: function () {
    return {
      id: 'chart',
      ohlc: [],
      volumeData: []
    }
  },
  mounted () {
    this.getChartData()
  },
  methods: {
    getChartData () {
      // https://data.jianshukeji.com/stock/history/000001
      var that = this
      $.getJSON('https://data.jianshukeji.com/stock/history/000001', function (data) {
        if (data.code !== 1) {
          alert('读取股票数据失败！')
          return false
        }
        var dealingData = data.data
        for (var i = 0; i < dealingData.length; i++) {
          that.ohlc.push([
            dealingData[i][0], // the date
            dealingData[i][1], // open
            dealingData[i][2], // high
            dealingData[i][3], // low
            dealingData[i][4] // close
          ])
          that.volumeData.push([
            dealingData[i][0], // the date
            dealingData[i][5] // the volume
          ])
        }
        that.drawChart()
      })
    },
    drawChart () {
      Highcharts.stockChart('mainChart', {
        rangeSelector: {
          selected: 1,
          inputDateFormat: '%Y-%m-%d'
        },
        title: {
          text: ''
        },
        xAxis: {
          dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%m-%d',
            week: '%m-%d',
            month: '%y-%m',
            year: '%Y'
          }
        },
        tooltip: {
          split: false,
          shared: true
        },
        legend: {
          enabled: true,
          align: 'right',
          // layout: 'vertical',
          verticalAlign: 'top'
        },
        rangeSelector: {
          inputEnabled: false
        },
        yAxis: [{
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: '股价'
          },
          height: '65%',
          resize: {
            enabled: true
          },
          lineWidth: 2
        }, {
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: '成交量'
          },
          top: '65%',
          height: '35%',
          offset: 0,
          lineWidth: 2
        }],
        series: [{
          type: 'spline',
          name: '价格(CNY)',
          color: '#306FCE',
          lineColor: '#306FCE',
          navigatorOptions: {
            color: Highcharts.getOptions().colors[0]
          },
          data: this.ohlc,
          id: 'sz'
        }, {
          type: 'column',
          name: '24交易量',
          data: this.volumeData,
          yAxis: 1
        }]
      })
    }
  }
}
</script>
<style>
</style>
