<style lang="scss">
  .art-date {
    header {
      top: 0;
      right: 0;
      left: 0;
      height: 44px;
      line-height: 44px;
      font-size: 18px;
      color: #fff;
      text-align: center;
      font-weight: 300;
      background-color: #1ba9ba;
    }
    .months {
      overflow: scroll;
    }
    .day:first-child, .day:last-child, .holiday {
      color: #ff8205;
    }
    .days {
      display: flex;
      justify-content: space-around;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      border-bottom: 1px solid #eee;
    }
    table {
      width: 100%;
      thead tr th {
        width: 100%;
        font-size: 16px;
        text-align: center;
        padding: 15px 0;
      }
      tbody tr {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1px;
        td {
          flex: 1;
          height: 46px;
          line-height: 46px;
          text-align: center;
          &.has-order {
            color: #1ba9ba;
          }
          &.over-date, &.exceed{
            color: #bbb;
          }
          &.active-start, &.active-end {
            background-color: #1ba9ba;
            color: #fff;
          }
          &.active-start {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &.active-end {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          &.active2 {
            background-color: #1ba9ba;
            opacity: .3;
            color: #fff;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="art-date art-example-background">
    <header>日历</header>
    <ul class="days">
      <li class="day" v-for="day in weekDays" :key="day">{{ day }}</li>
    </ul>
    <div class="months">
      <table v-for="(monthData, index) in monthsData" :key="index">
        <thead>
          <tr>
            <th>— {{ monthData.year }}年{{ monthData.month }}月 —</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in monthData.weeks" :key="index">
            <td @click="tdClick(date)" :class="{
              'holiday': date.isWeekend && date.isThisMonth,
              'over-date': date.isOver,
              'exceed': date.isExceed,
              'has-order': date.hasOrder,
              'active-start': date.time === start && date.isThisMonth,
              'active-end': date.time === end && date.isThisMonth,
              'active2': start && end && date.time < end && date.time > start && date.isThisMonth
              }" v-for="date in week" :key="date.time">
              <span v-if="date.isThisMonth" v-text="date.isToday ? '今天' : date.date"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      start: '',
      end: ''
    }
  },
  created () {
    let months = []
    const year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    const endMonth = month + 3
    for (month; month < endMonth; month++) {
      months.push(this.getMonthData(year, month))
    }
    this.monthsData = months
    this.weekDays = ['日', '一', '二', '三', '四', '五', '六']
  },
  methods: {
    tdClick (date) {
      if (date.hasOrder || date.isExceed || date.isOver || !date.isThisMonth) {
        return
      }
      if (this.start) {
        if (this.end) {
          this.end = ''
          this.start = date.time
        } else {
          if (date.time < this.start) {
            this.start = date.time
          } else {
            if (this.isNoOrder(this.start, date.time)) {
              this.end = date.time
              console.log('开始时间: ', this.start)
              console.log('结束时间: ', this.end)
            } else {
              this.start = date.time
            }
          }
        }
      } else {
        this.start = date.time
      }
    },

    isNoOrder (start, end) {
      let res = true
      this.monthsData.forEach(month => {
        month.weeks.forEach(week => {
          week.forEach(day => {
            if (day.time > start && day.time < end) {
              if (day.hasOrder) {
                res = false
              }
            }
          })
        })
      })
      return res
    },

    getMonthData (year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
      if (month > 12) {
        month = month - 12
        year = year + 1
      }

      let monthData = {
        year,
        month: month,
        weeks: []
      }

      const firstDay = new Date(year, month - 1, 1).getDay()
      let startDate = 1 - firstDay
      const lastDate = new Date(year, month, 0).getDate()
      const lastDay = new Date(year, month, 0).getDay()
      const endDate = lastDate + (6 - lastDay)

      let week = []
      const curTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()
      const maxTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 60).getTime()
      for (startDate; startDate <= endDate; startDate++) {
        const today = new Date(year, month - 1, startDate)
        const thisYear = today.getFullYear()
        const thisMonth = today.getMonth() + 1
        const thisDate = today.getDate()
        const thisDay = today.getDay() === 0 ? 7 : today.getDay()
        const thisTime = today.getTime()
        const thisFull = thisYear + '-' + thisMonth + '-' + thisDate
        const isThisMonth = thisMonth === month
        const isWeekend = thisDay === 6 || thisDay === 7
        const isOver = thisTime < curTime
        const isToday = curTime === thisTime
        const isExceed = thisTime > maxTime
        const hasOrder = Math.floor(Math.random() * 10) > 5

        week.push({
          year: thisYear,
          month: thisMonth,
          date: thisDate,
          day: thisDay,
          time: thisTime,
          full: thisFull,
          isThisMonth: isThisMonth,
          isWeekend: isWeekend,
          isOver: isOver,
          isToday: isToday,
          isExceed: isExceed,
          hasOrder: hasOrder
        })

        if (week.length === 7) {
          monthData.weeks.push(week)
          week = []
        }
      }
      return monthData
    }
  }
}
</script>
