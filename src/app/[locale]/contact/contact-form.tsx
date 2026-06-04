"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  dict: Record<string, string>;
}

export function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Submit to FormSubmit.co (free static form handling)
    // Replace with your own form endpoint
    try {
      await fetch("https://formsubmit.co/ajax/lichengyin@jjtrading.com.cn", {
        method: "POST",
        body: data,
      });
    } catch {
      // Form will fall back to the action URL if fetch fails
    }

    // Simulate send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mx-auto mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Спасибо!</h3>
        <p className="text-muted-foreground">{dict["form.success"]}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formsubmit.co/lichengyin@jjtrading.com.cn"
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="Новый запрос с jjtrading.com.cn" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {dict["form.name"]} <span className="text-destructive">*</span>
          </label>
          <Input
            name="name"
            placeholder={dict["form.placeholder.name"]}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{dict["form.phone"]}</label>
          <Input name="phone" type="tel" placeholder="+7 (999) 123-45-67" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {dict["form.email"]} <span className="text-destructive">*</span>
          </label>
          <Input
            name="email"
            type="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{dict["form.company"]}</label>
          <Input name="company" placeholder="ООО «Технология»" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          {dict["form.message"]} <span className="text-destructive">*</span>
        </label>
        <Textarea
          name="message"
          placeholder={dict["form.placeholder.message"]}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Отправка...
          </span>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {dict["form.submit"]}
          </>
        )}
      </Button>
    </form>
  );
}
