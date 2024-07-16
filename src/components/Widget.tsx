import { ChatTeardropDots } from "phosphor-react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm/index";

export function Widget(){

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex-col items-end">
      <PopoverPanel>
        <WidgetForm/>
      </PopoverPanel>

      <PopoverButton 
        className="flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group"
      >
        <ChatTeardropDots className="w-6 h-6 "/>
        <span 
          className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
        >
          <span className="pl-2"></span>
          Feedback
        </span>
      </PopoverButton>

    </Popover>
    
  )
}