import { useState } from 'react'

interface ICalendarType {
  defaultValue?: Date
  onChange?: (date: Date) => void
}

const monthName = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '十一',
  '十二',
]

const FuckCSS: React.FC<ICalendarType> = props => {
  const { defaultValue, onChange } = props
  const [date, setDate] = useState(defaultValue || new Date())

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  /**
   * @param year
   * @param month
   * @returns 一个月一共有多少天
   */
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }
  /**
   * @param year
   * @param month
   * @returns 这个月 1号 是星期几?
   */
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  //* 渲染组件的函数
  const renderDates = () => {
    const days = []

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth())

    // 提前渲染 empty 块占位
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="w-[calc(100%/7)] text-center leading-[30px]"
        ></div>,
      )
    }

    // 渲染实际的天数
    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), i)
        setDate(currentDate)
        onChange?.(currentDate)
      }

      // 选中时添加背景
      if (i === date.getDate()) {
        days.push(
          <div
            key={i}
            className="w-[calc(100%/7)] text-center leading-[30px] cursor-pointer bg-black text-white rounded-lg font-sans "
            onClick={() => clickHandler()}
          >
            {i}
          </div>,
        )
      } else {
        days.push(
          <div
            key={i}
            className="w-[calc(100%/7)] text-center leading-[30px] hover:bg-slate-200 cursor-pointer font-sans font-light rounded-lg duration-300 text-gray-700"
            onClick={() => clickHandler()}
          >
            {i}
          </div>,
        )
      }
    }

    return days
  }

  return (
    <div className="w-[270px] h-[287px] m-auto p-3 rounded-lg items-center justify-center bg-white/95 shadow-lg">
      <div className="flex justify-center items-center h-10 gap-4">
        <button
          onClick={handlePrevMonth}
          className="border px-2 rounded-lg text-lg font-serif"
        >
          &lt;
        </button>
        <div className="mx-4 w-32 text-center">
          {date.getFullYear()} 年 {monthName[date.getMonth()]} 月
        </div>
        <button
          onClick={handleNextMonth}
          className="border px-2 rounded-lg text-lg font-serif"
        >
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap">
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          日
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          一
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          二
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          三
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500  ">
          四
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          五
        </div>
        <div className=" w-[calc(100%/7)] text-center leading-[30px]  font-light text-gray-500">
          六
        </div>
        {/* 渲染一个一个日期 */}
        {renderDates()}
      </div>
    </div>
  )
}

export default FuckCSS
