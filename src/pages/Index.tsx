import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', car: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Wrench" size={20} className="text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">Opel & Chevrolet</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Premium Service</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              О нас
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Запись
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('booking')} className="hidden md:flex shadow-lg hover:shadow-xl transition-shadow">
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 18, 23, 0.7), rgba(15, 18, 23, 0.8)), url('https://cdn.poehali.dev/projects/5499ed27-563c-4009-ae1a-c9c0b6a92530/files/ac6d6d2d-7dab-4a8c-bf84-af4467cb0d96.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="container relative z-10 text-center text-white px-4">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 animate-fade-in">
            <span className="text-sm font-medium text-accent">Премиум-сервис с 2008 года</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight">
            Экспертный уход<br />за вашим автомобилем
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto animate-fade-in font-light tracking-wide">
            Компьютерная диагностика премиум-класса для Opel и Chevrolet
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in">
            <Button onClick={() => scrollToSection('booking')} size="lg" className="text-base px-10 py-6 shadow-2xl hover:shadow-accent/20 transition-all hover:scale-105">
              Записаться на диагностику
            </Button>
            <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-base px-10 py-6 bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-sm hover:border-white/50 transition-all hover:scale-105">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale border-none shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Icon name="Monitor" size={36} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">Профессиональное обслуживание автомобилей марок Opel и Chevrolet</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale border-none shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Icon name="Award" size={36} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Сертификация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">Мастера с международными сертификатами и регулярным повышением квалификации</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale border-none shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-5 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Icon name="ShieldCheck" size={36} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">Расширенная гарантия на работы и оригинальные запчасти премиум-класса</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-accent mb-3 tracking-wider uppercase">Наши услуги</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Премиум-обслуживание вашего автомобиля</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon name="Cpu" size={26} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">Компьютерная диагностика</CardTitle>
                    <span className="text-xs text-accent font-medium">Приоритетная услуга</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-5">
                  Полная компьютерная диагностика всех систем. Выявление скрытых неисправностей и ошибок электроники.
                </CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">от 1 500</span>
                  <span className="text-lg text-muted-foreground">₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon name="Cog" size={26} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Ремонт двигателя</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-5">
                  Капитальный и текущий ремонт двигателей. Замена масла, фильтров, ремней ГРМ.
                </CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">от 3 000</span>
                  <span className="text-lg text-muted-foreground">₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon name="Gauge" size={26} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Ходовая часть</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-5">
                  Диагностика и ремонт подвески, замена амортизаторов. Развал-схождение.
                </CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">от 2 500</span>
                  <span className="text-lg text-muted-foreground">₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon name="Zap" size={26} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Электрика</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-5">
                  Ремонт электропроводки, замена генератора, стартера. Устранение неисправностей.
                </CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">от 2 000</span>
                  <span className="text-lg text-muted-foreground">₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon name="Disc" size={26} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Тормозная система</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-5">
                  Замена тормозных колодок, дисков. Прокачка системы, замена жидкости.
                </CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">от 1 800</span>
                  <span className="text-lg text-muted-foreground">₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon name="Thermometer" size={26} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Система охлаждения</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed mb-5">
                  Ремонт и обслуживание системы охлаждения. Замена радиатора, термостата.
                </CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">от 2 200</span>
                  <span className="text-lg text-muted-foreground">₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашем автосервисе</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на ремонте и обслуживании автомобилей марок Opel и Chevrolet с 2008 года. 
                Наш сервис оснащен современным диагностическим оборудованием, позволяющим быстро и точно 
                выявлять любые неисправности.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Особое внимание мы уделяем компьютерной диагностике — это позволяет определить причину 
                неисправности без разборки узлов и агрегатов, что значительно экономит ваше время и деньги.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0" />
                  <span className="text-base">Оригинальные и качественные аналоговые запчасти</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0" />
                  <span className="text-base">Прозрачное ценообразование без скрытых платежей</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0" />
                  <span className="text-base">Гарантия на все выполненные работы</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0" />
                  <span className="text-base">Удобная запись онлайн и по телефону</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Почему выбирают нас</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Профессионализм</span>
                    <span className="text-accent font-bold">98%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Качество работ</span>
                    <span className="text-accent font-bold">96%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Скорость обслуживания</span>
                    <span className="text-accent font-bold">94%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Рекомендуют друзьям</span>
                    <span className="text-accent font-bold">97%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '97%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Онлайн-запись</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="car">Марка и модель автомобиля *</Label>
                  <Input
                    id="car"
                    required
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    placeholder="Opel Astra / Chevrolet Cruze"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Описание проблемы</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите, что случилось с автомобилем..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="MapPin" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Phone" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">+7 (926) 987-65-43</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Clock" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={24} />
              <span className="font-bold">АвтоСервис Opel-Chevrolet</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;