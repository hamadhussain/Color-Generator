import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
  export default function CommandDemo({color,bg,inputc}) {
    return (
      <Command className={`rounded-lg w-fit border shadow-md text-${color} bg-${bg}`} style={{color:inputc}}>
        <CommandInput className={`text-${color} bg-${bg}`} placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem className={` text-${color} bg-${bg}`}>
              <Calendar className={`mr-2 h-4 w-4 text-${color} bg-${bg}`} />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem className={`text-${color} bg-${bg}`}>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem className={`text-${color} bg-${bg}`}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem className={`text-${color} bg-${bg}`}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem className={`text-${color} bg-${bg}`}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem className={`text-${color} bg-${bg}`}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  