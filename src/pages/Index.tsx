import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1117] via-[#1A1F2C] to-[#0F1117]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)] pointer-events-none" />

      <div className="relative">
        <section className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0">
                ⭐ Качественные отзывы для вашего профиля
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
                Купить отзыв на profi.ru
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Повысьте рейтинг и доверие клиентов с помощью настоящих отзывов
                от реальных пользователей. Быстро, безопасно и эффективно.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle2"
                    className="text-primary"
                    size={24}
                  />
                  <span className="text-gray-200">Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span className="text-gray-200">100% безопасно</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" className="text-primary" size={24} />
                  <span className="text-gray-200">Быстрый результат</span>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 backdrop-blur-lg border-primary/30 shadow-2xl shadow-primary/20 p-8 text-center">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
                    <Icon name="MessageCircle" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl mb-4">Готовы повысить рейтинг?</CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    Свяжитесь со мной в Telegram для обсуждения деталей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    size="lg"
                    className="w-full text-xl py-8 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 hover:scale-105"
                  >
                    <a
                      href="https://t.me/sneznyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <Icon name="Send" size={24} />
                      Написать в Telegram
                    </a>
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    Ответим в течение 15 минут
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Преимущества услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Star",
                title: "Повышение рейтинга",
                description:
                  "Увеличьте свой рейтинг на Profi.ru и станьте заметнее для потенциальных клиентов",
              },
              {
                icon: "Users",
                title: "Реальные аккаунты",
                description:
                  "Отзывы оставляют только проверенные пользователи с активными аккаунтами",
              },
              {
                icon: "TrendingUp",
                title: "Рост доверия",
                description:
                  "Больше положительных отзывов = больше доверия со стороны новых клиентов",
              },
              {
                icon: "Clock",
                title: "Быстрое выполнение",
                description:
                  "Отзывы начнут появляться уже через 24-48 часов после заказа",
              },
              {
                icon: "Lock",
                title: "Полная конфиденциальность",
                description:
                  "Никто не узнает, что отзывы были заказаны. Все выглядит естественно",
              },
              {
                icon: "DollarSign",
                title: "Выгодные цены",
                description:
                  "Гибкие тарифы под любой бюджет с возможностью индивидуального подхода",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon
                      name={item.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Как это работает
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Оставьте заявку",
                  description:
                    "Заполните форму выше или свяжитесь с нами любым удобным способом",
                },
                {
                  step: "02",
                  title: "Согласование деталей",
                  description:
                    "Обсудим количество отзывов, их содержание и сроки выполнения",
                },
                {
                  step: "03",
                  title: "Оплата услуги",
                  description:
                    "Оплатите заказ удобным для вас способом. Работаем по предоплате",
                },
                {
                  step: "04",
                  title: "Размещение отзывов",
                  description:
                    "Наши специалисты начнут размещать отзывы согласно согласованному плану",
                },
                {
                  step: "05",
                  title: "Контроль результата",
                  description:
                    "Отслеживайте появление отзывов на вашей странице в режиме реального времени",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Стоимость услуг
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Старт",
                price: "499",
                reviews: "3 отзыва",
                features: [
                  "Реальные аккаунты",
                  "Текст по вашему ТЗ",
                  "Выполнение за 3-5 дней",
                  "Базовая поддержка",
                ],
              },
              {
                name: "Стандарт",
                price: "999",
                reviews: "6 отзывов",
                features: [
                  "Реальные аккаунты",
                  "Текст по вашему ТЗ",
                  "Выполнение за 5-7 дней",
                  "Приоритетная поддержка",
                  "Гарантия на отзывы",
                ],
                popular: true,
              },
              {
                name: "Премиум",
                price: "1999",
                reviews: "14 отзывов",
                features: [
                  "Реальные аккаунты",
                  "Текст по вашему ТЗ",
                  "Выполнение за 7-10 дней",
                  "VIP поддержка 24/7",
                  "Гарантия на отзывы",
                  "Бонусные отзывы",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card/30 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 ${plan.popular ? "border-primary/50 shadow-xl shadow-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 ret1">501</div>
                  <CardDescription className="text-gray-400 text-lg">
                    {plan.reviews}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          className="text-primary flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей М.",
                role: "Мастер по ремонту",
                rating: 5,
                text: "Заказал 7 отзывов для своего профиля. Результат превзошел ожидания! Поток клиентов увеличился в 2 раза.",
              },
              {
                name: "Екатерина П.",
                role: "Репетитор",
                rating: 5,
                text: "Отличный сервис! Отзывы появились в течение 3 дней, выглядят абсолютно естественно. Всем рекомендую.",
              },
              {
                name: "Дмитрий К.",
                role: "Сантехник",
                rating: 5,
                text: "Уже второй раз заказываю отзывы здесь. Профессиональный подход, быстрое выполнение, адекватные цены.",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur border-primary/10 hover:border-primary/30 transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {review.role}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-primary fill-primary"
                        size={18}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Вопросы и ответы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Это безопасно?",
                  answer:
                    "Да, абсолютно безопасно. Мы используем только проверенные методы и реальные аккаунты, что исключает риск блокировки вашего профиля.",
                },
                {
                  question: "Как быстро появятся отзывы?",
                  answer:
                    "Первые отзывы начнут появляться через 24-48 часов после оплаты. Полное выполнение заказа занимает от 3 до 10 дней в зависимости от выбранного тарифа.",
                },
                {
                  question: "Можно ли выбрать содержание отзывов?",
                  answer:
                    "Да, вы можете предоставить нам техническое задание с ключевыми моментами, которые должны быть упомянуты в отзывах. Мы составим естественные тексты на их основе.",
                },
                {
                  question: "Что если отзыв удалят?",
                  answer:
                    "Мы даем гарантию на все размещенные отзывы. Если отзыв будет удален модерацией в течение 30 дней, мы разместим новый бесплатно.",
                },
                {
                  question: "Какие способы оплаты доступны?",
                  answer:
                    "Мы принимаем оплату банковскими картами, электронными кошельками и банковскими переводами. Работаем по 100% предоплате.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/30 backdrop-blur border border-primary/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Наши гарантии
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "ShieldCheck",
                title: "Гарантия качества",
                description:
                  "Все отзывы размещаются только с реальных аккаунтов с историей активности",
              },
              {
                icon: "RefreshCcw",
                title: "Замена в случае удаления",
                description:
                  "Если отзыв будет удален в течение 30 дней, мы бесплатно разместим новый",
              },
              {
                icon: "FileText",
                title: "Договор и чек",
                description:
                  "Оформляем официальный договор и предоставляем все закрывающие документы",
              },
              {
                icon: "Headphones",
                title: "Поддержка 24/7",
                description:
                  "Наша команда всегда на связи и готова ответить на любые ваши вопросы",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur border-primary/10 hover:border-primary/30 transition-all group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon
                      name={item.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 backdrop-blur border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Готовы улучшить свой рейтинг?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Оставьте заявку сейчас и получите бесплатную консультацию по
                продвижению вашего профиля на Profi.ru
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-12 py-6"
              >
                Получить консультацию
                <Icon name="MessageCircle" className="ml-2" size={22} />
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t border-primary/10">
          <div className="text-center text-gray-400">
            <p className="mb-2">© 2024 Profi Reviews. Все права защищены.</p>
            <p className="text-sm">
              Мы не аффилированы с Profi.ru и предоставляем независимые
              маркетинговые услуги
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;