
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const timeSlots = [
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM", 
  "6:00 PM", "6:30 PM", 
  "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", 
  "9:00 PM"
];

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7 Guests", "8 Guests"];

interface ReservationFormProps {
  restaurantName: string;
}

const ReservationForm = ({ restaurantName }: ReservationFormProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [guests, setGuests] = useState<string>(guestOptions[1]);

  const handleReservation = () => {
    if (!date || !time) {
      toast.error("Please select both date and time for your reservation");
      return;
    }
    
    toast.success(`Reservation confirmed at ${restaurantName} for ${guests} on ${format(date, "PPP")} at ${time}`);
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-4">Make a Reservation</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !time && "text-gray-400"
                )}
              >
                <Clock className="mr-2 h-4 w-4" />
                {time || "Select a time"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64" align="start">
              <div className="grid grid-cols-2 gap-2 p-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={time === slot ? "default" : "outline"}
                    className={cn(
                      "justify-start",
                      time === slot && "bg-culinary hover:bg-culinary-dark"
                    )}
                    onClick={() => {
                      setTime(slot);
                    }}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Party Size</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-full justify-start text-left font-normal"
              >
                <Users className="mr-2 h-4 w-4" />
                {guests}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="start">
              <div className="grid gap-1 p-1">
                {guestOptions.map((option) => (
                  <Button
                    key={option}
                    variant={guests === option ? "default" : "ghost"}
                    className={cn(
                      "justify-start",
                      guests === option && "bg-culinary hover:bg-culinary-dark"
                    )}
                    onClick={() => {
                      setGuests(option);
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <Button 
          className="w-full bg-culinary hover:bg-culinary-dark mt-2" 
          onClick={handleReservation}
        >
          Book Table
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          By booking a table, you agree to our reservation policy.
        </p>
      </div>
    </div>
  );
};

export default ReservationForm;
