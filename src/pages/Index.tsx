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
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={28} className="text-accent" />
            <span className="text-xl font-bold">АвтоСервис Opel-Chevrolet</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-sm font-medium hover:text-accent transition-colors">
              Запись
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('booking')} className="hidden md:flex">
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.75), rgba(26, 31, 44, 0.75)), url('https://cdn.poehali.dev/projects/5499ed27-563c-4009-ae1a-c9c0b6a92530/files/ac6d6d2d-7dab-4a8c-bf84-af4467cb0d96.jpg')`
          }}
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональный ремонт<br />Opel и Chevrolet
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Компьютерная диагностика и выявление неисправностей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button onClick={() => scrollToSection('booking')} size="lg" className="text-lg px-8">
              Записаться на диагностику
            </Button>
            <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Monitor" size={32} className="text-accent" />
                </div>
                <CardTitle>15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Профессиональное обслуживание автомобилей марок Opel и Chevrolet</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <CardTitle>Сертифицированные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Наши мастера регулярно проходят обучение и повышение квалификации</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="ShieldCheck" size={32} className="text-accent" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Предоставляем гарантию на все виды работ и используемые запчасти</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-scale border-2 hover:border-accent transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Cpu" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Компьютерная диагностика</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Полная компьютерная диагностика всех систем автомобиля. Выявление скрытых неисправностей и ошибок электроники.
                </CardDescription>
                <div className="mt-4 text-2xl font-bold text-accent">от 1500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Cog" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Ремонт двигателя</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Капитальный и текущий ремонт двигателей Opel и Chevrolet. Замена масла, фильтров, ремней ГРМ.
                </CardDescription>
                <div className="mt-4 text-2xl font-bold text-accent">от 3000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Gauge" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Ходовая часть</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Диагностика и ремонт подвески, замена амортизаторов, рычагов, сайлентблоков. Развал-схождение.
                </CardDescription>
                <div className="mt-4 text-2xl font-bold text-accent">от 2500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Электрика</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ремонт электропроводки, замена генератора, стартера. Устранение неисправностей электрооборудования.
                </CardDescription>
                <div className="mt-4 text-2xl font-bold text-accent">от 2000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Disc" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Тормозная система</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Замена тормозных колодок, дисков, суппортов. Прокачка тормозной системы, замена жидкости.
                </CardDescription>
                <div className="mt-4 text-2xl font-bold text-accent">от 1800 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Thermometer" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Система охлаждения</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ремонт и обслуживание системы охлаждения. Замена радиатора, термостата, помпы.
                </CardDescription>
                <div className="mt-4 text-2xl font-bold text-accent">от 2200 ₽</div>
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
