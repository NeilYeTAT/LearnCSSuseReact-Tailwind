export default function FuckCSS() {
  const wordsArray = [
    'Button',
    'Log in / Sign up',
    'Table',
    'CSS Illustration',
    'File Upload',
    'Text Effect',
    'Slider',
    'Select',
    'Chat / Message',
    'Card / Widget',
    'Switch / Toggle',
    'Carousel',
    'Accordion',
    'Chart / Graph',
    'Cool Animation',
    'Border',
    'Social Icon / Button',
    'Tab',
    'Loading',
    'SVG illustration',
    'Payment',
    'Progress Bar',
    'Misc',
    'Checkbox / Radio',
    'App / Interactive',
    'Calendar / Datepicker',
    '404 Page',
    'Form',
    'Button',
    'Log in / Sign up',
    'Table',
    'CSS Illustration',
    'File Upload',
    'Text Effect',
    'Slider',
    'Select',
    'Chat / Message',
    'Card / Widget',
    'Switch / Toggle',
    'Carousel',
    'Accordion',
    'Chart / Graph',
    'Cool Animation',
    'Border',
    'Social Icon / Button',
    'Tab',
    'Loading',
    'SVG illustration',
    'Payment',
    'Progress Bar',
    'Misc',
    'Checkbox / Radio',
    'App / Interactive',
    'Calendar / Datepicker',
    '404 Page',
    'Form',
  ]

  return (
    <div className="h-full w-full m-auto bg-pink-200 flex">
      <div className="w-1/5 bg-indigo-200 h-full overflow-y-scroll scrollbar scrollbar-thumb-indigo-500 scrollbar-thumb-rounded-full scrollbar-w-1">
        <ul className="flex flex-col gap-2 px-4 font-mono text-xl">
          {wordsArray.map((item, index) => (
            <li
              className="p-2 hover:text-indigo-700 cursor-pointer flex flex-col relative group"
              key={index}
            >
              {item}
              <span className="absolute bottom-0 left-0  group-hover:w-full w-0 bg-white h-0.5 duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
      <div className=""></div>
    </div>
  )
}
