"use client";

import { useState, useEffect } from "react";
import { Bell, ArrowRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  href?: string;
  external?: boolean;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "Dina is open for new job",
    description: "I am currently looking for new career opportunities! Reach out via contact if interested.",
    date: "Just now",
    href: "/contact",
  },
  {
    id: "2",
    title: "New Blogs Inserted!",
    description: "Check out my latest thoughts and research articles on the blog section.",
    date: "1 day ago",
    href: "/#blogs",
  },
];

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    // Check session storage to see if notifications have been viewed in this session
    const viewed = sessionStorage.getItem("notificationsViewed");
    if (!viewed) {
      setHasUnread(true);
    }
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen && hasUnread) {
      setHasUnread(false);
      sessionStorage.setItem("notificationsViewed", "true");
    }
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full h-10 w-10 text-muted-foreground hover:text-white">
          <Bell className="h-5 w-5" />
          {hasUnread && (
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[90vw] sm:w-80 max-w-[calc(100vw-2rem)] p-0 mr-4 mt-2 bg-surface-container-low border-white/10 shadow-2xl glass" align="end">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h4 className="font-semibold text-sm">Notifications</h4>
          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
            {NOTIFICATIONS.length} New
          </span>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="flex flex-col">
            {NOTIFICATIONS.map((notification) => {
              const content = (
                <div className="flex flex-col gap-1 p-4 hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0 relative group">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                      {notification.title}
                    </h5>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
                      {notification.date}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {notification.description}
                  </p>
                </div>
              );

              if (notification.href) {
                return (
                  <Link 
                    key={notification.id} 
                    href={notification.href}
                    target={notification.external ? "_blank" : undefined}
                    rel={notification.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {content}
                  </Link>
                );
              }

              return <div key={notification.id}>{content}</div>;
            })}
          </div>
        </ScrollArea>
        <div className="p-3 flex flex-col gap-3 border-t border-white/10 mt-1">
          <Button asChild variant="outline" className="group w-full flex items-center justify-center gap-2 py-4 px-4 sm:px-6 rounded-full bg-white/5 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest text-center cursor-pointer h-auto">
            <Link href="https://old.dinachat.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <span className="truncate">Rollback to old portfolio</span>
              <ArrowRight className="w-3 h-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <button className="text-xs text-center text-muted-foreground hover:text-white transition-colors" onClick={() => setOpen(false)}>
            Mark all as read
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
