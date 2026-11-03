'use client'

import { useState } from 'react'
import { ArrowRight, BookOpen, ChevronDown, Flame, Headphones, Mic2, MoreHorizontal, Play, Plus, Search, Settings2, Sparkles, TrendingUp, Volume2, X } from 'lucide-react'

const topics = [
  { title: 'Daily conversation', subtitle: '일상 대화', color: 'from-[#d8f7e8] to-[#b9ead2]', icon: '☕', label: '초급' },
  { title: 'Travel & culture', subtitle: '여행과 문화', color: 'from-[#dceaff] to-[#bdd2ff]', icon: '✈', label: '중급' },
  { title: 'Work & career', subtitle: '업무와 커리어', color: 'from-[#f6e3ff] to-[#e2c6ff]', icon: '▣', label: '중급' },
  { title: 'News & society', subtitle: '뉴스와 사회', color: 'from-[#fff0ca] to-[#ffde9e]', icon: '◉', label: '고급' },
]

const agents = [
  { name: 'Alex', role: 'Friendly coach', tone: '편안하고 다정한', color: 'bg-[#ffd8c7]', face: '👩🏻‍🦱', active: true },
  { name: 'James', role: 'Debate partner', tone: '논리적이고 날카로운', color: 'bg-[#d8e5ff]', face: '👨🏻‍💼' },
  { name: 'Mina', role: 'Story teller', tone: '재미있고 창의적인', color: 'bg-[#e7d9ff]', face: '👩🏻‍🎨' },
]

export default function Page() {
  const [activeTopic, setActiveTopic] = useState('Daily conversation')
  const [activeAgent, setActiveAgent] = useState('Alex')
  const [showSettings, setShowSettings] = useState(false)
  const [started, setStarted] = useState(false)

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#172033]">
      <header className="sticky top-0 z-20 border-b border-[#e7eaf0] bg-[#ffffff]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#1668e8] text-lg font-extrabold text-white shadow-[0_6px_18px_rgba(22,104,232,0.22)]">L</div>
            <div><div className="text-[17px] font-extrabold tracking-[-0.03em]">lingo<span className="text-[#1668e8]">mate</span></div><div className="text-[10px] font-semibold tracking-[0.14em] text-[#99a1b2]">ENGLISH, YOUR WAY</div></div>
          </div>
          <nav className="hidden items-center gap-8 text-[13px] font-bold text-[#7d8799] md:flex"><span className="text-[#1668e8]">Learn</span><span>Progress</span><span>Community</span></nav>
          <div className="flex items-center gap-3"><button aria-label="검색" className="hidden h-10 w-10 items-center justify-center rounded-xl border border-[#e6eaf0] bg-white text-[#7c879a] sm:flex"><Search size={17} /></button><button onClick={() => setShowSettings(!showSettings)} className="flex items-center gap-2 rounded-xl border border-[#e6eaf0] bg-white px-3 py-2 text-xs font-bold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7efff] text-[#1668e8]">J</span><span className="hidden sm:inline">Jisoo</span><ChevronDown size={14} className="text-[#9aa3b3]" /></button></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 py-8 lg:grid-cols-[1fr_340px] lg:px-10">
        <section>
          <div className="mb-8 flex items-start justify-between"><div><p className="mb-2 text-[13px] font-bold text-[#1668e8]">TUESDAY, NOVEMBER 3</p><h1 className="text-[30px] font-extrabold tracking-[-0.045em] sm:text-[38px]">오늘은 어떤 영어를<br /><span className="text-[#1668e8]">말해볼까요?</span></h1><p className="mt-3 text-[14px] font-medium text-[#8993a5]">AI 친구들과 부담 없이, 나만의 속도로 연습해보세요.</p></div><div className="hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm sm:flex"><Flame size={19} className="fill-[#ff9c51] text-[#ff9c51]" /><div><div className="text-sm font-extrabold">7 day streak</div><div className="text-[11px] font-semibold text-[#9aa3b3]">꾸준함이 힘이에요!</div></div></div></div>

          <div className="mb-9"><div className="mb-4 flex items-center justify-between"><h2 className="text-[18px] font-extrabold">오늘의 토픽</h2><button className="text-xs font-bold text-[#1668e8]">전체보기 <ArrowRight size={13} className="ml-1 inline" /></button></div><div className="grid grid-cols-2 gap-3 xl:grid-cols-4">{topics.map((topic) => <button key={topic.title} onClick={() => setActiveTopic(topic.title)} className={`group relative overflow-hidden rounded-[18px] bg-gradient-to-br ${topic.color} p-4 text-left transition-all ${activeTopic === topic.title ? 'ring-2 ring-[#1668e8] ring-offset-2' : 'hover:-translate-y-0.5'}`}><div className="mb-7 flex items-start justify-between"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 text-lg">{topic.icon}</span><span className="rounded-full bg-white/60 px-2 py-1 text-[10px] font-extrabold text-[#536176]">{topic.label}</span></div><div className="text-[14px] font-extrabold">{topic.title}</div><div className="mt-1 text-[11px] font-semibold text-[#667286]">{topic.subtitle}</div></button>)}</div></div>

          <div className="mb-9"><div className="mb-4 flex items-center justify-between"><div><h2 className="text-[18px] font-extrabold">나의 AI 친구</h2><p className="mt-1 text-xs font-medium text-[#9aa3b3]">오늘 대화할 친구를 골라보세요.</p></div><button className="flex items-center gap-1 text-xs font-bold text-[#1668e8]"><Plus size={15} /> 친구 만들기</button></div><div className="grid gap-3 sm:grid-cols-3">{agents.map((agent) => <button key={agent.name} onClick={() => setActiveAgent(agent.name)} className={`flex items-center gap-3 rounded-[18px] border bg-white p-3 text-left transition-all ${activeAgent === agent.name ? 'border-[#1668e8] shadow-[0_8px_24px_rgba(22,104,232,0.1)]' : 'border-[#e9edf2] hover:border-[#c9d3e4]'}`}><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-2xl ${agent.color}`}>{agent.face}</div><div className="min-w-0"><div className="flex items-center gap-2 text-sm font-extrabold">{agent.name}{agent.active && <span className="h-1.5 w-1.5 rounded-full bg-[#28c883]" />}</div><div className="mt-1 truncate text-[11px] font-semibold text-[#929bab]">{agent.tone}</div></div><MoreHorizontal size={17} className="ml-auto text-[#b5bdc9]" /></button>)}</div></div>

          <div className="rounded-[24px] bg-[#16243a] p-6 text-white shadow-[0_14px_38px_rgba(21,37,61,0.13)] sm:p-8"><div className="flex items-start justify-between"><div><div className="mb-3 flex items-center gap-2 text-[11px] font-extrabold tracking-[0.12em] text-[#86b5ff]"><Sparkles size={14} /> RECOMMENDED PRACTICE</div><h2 className="text-[24px] font-extrabold tracking-[-0.03em]">카페에서 주문하기</h2><p className="mt-2 max-w-[460px] text-[13px] font-medium leading-6 text-[#a9b7ca]">바리스타 Alex와 함께 카페에서 자연스럽게 주문하는 표현을 연습해보세요.</p></div><div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#263b5a] text-3xl sm:flex">☕</div></div><div className="mt-7 flex items-center gap-3"><button onClick={() => setStarted(!started)} className="flex items-center gap-2 rounded-xl bg-[#3e8af5] px-5 py-3 text-[13px] font-extrabold transition hover:bg-[#5a9bf6]"><Play size={15} className="fill-white" /> {started ? '연습 중이에요' : '연습 시작하기'}</button><span className="text-[11px] font-semibold text-[#899bb5]">약 5분 · 초급</span></div></div>
        </section>

        <aside className="space-y-4"><div className="rounded-[22px] border border-[#e9edf2] bg-white p-5"><div className="mb-5 flex items-center justify-between"><h3 className="text-[16px] font-extrabold">이번 주 학습</h3><TrendingUp size={17} className="text-[#28b77d]" /></div><div className="mb-5 flex items-end justify-between"><div><span className="text-[34px] font-extrabold tracking-[-0.05em]">42</span><span className="ml-1 text-xs font-bold text-[#9ba4b2]">분</span></div><span className="rounded-full bg-[#e9faf2] px-2 py-1 text-[10px] font-extrabold text-[#24a872]">+18% ↑</span></div><div className="flex h-20 items-end justify-between gap-2">{['월','화','수','목','금','토','일'].map((day, i) => <div key={day} className="flex flex-1 flex-col items-center gap-2"><div className={`w-full rounded-t-md ${i === 1 ? 'bg-[#3e8af5]' : 'bg-[#e9f0fc]'}`} style={{height: `${[34,58,43,26,48,20,12][i]}px`}} /><span className="text-[10px] font-bold text-[#a2a9b5]">{day}</span></div>)}</div></div><div className="rounded-[22px] border border-[#e9edf2] bg-white p-5"><div className="mb-4 flex items-center justify-between"><h3 className="text-[16px] font-extrabold">빠른 연습</h3><button aria-label="설정" className="text-[#9aa3b3]"><Settings2 size={17} /></button></div><div className="space-y-2"><button className="flex w-full items-center gap-3 rounded-xl bg-[#f6f8fb] p-3 text-left transition hover:bg-[#edf3fc]"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dfeaff] text-[#397fe3]"><Mic2 size={17} /></span><span><span className="block text-xs font-extrabold">말하기 워밍업</span><span className="mt-1 block text-[10px] font-semibold text-[#9da6b5]">오늘의 문장 3개</span></span><ArrowRight size={14} className="ml-auto text-[#a4adba]" /></button><button className="flex w-full items-center gap-3 rounded-xl bg-[#f6f8fb] p-3 text-left transition hover:bg-[#edf3fc]"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e4f8ee] text-[#2aac76]"><Headphones size={17} /></span><span><span className="block text-xs font-extrabold">듣기 감각 깨우기</span><span className="mt-1 block text-[10px] font-semibold text-[#9da6b5]">짧은 대화 2개</span></span><ArrowRight size={14} className="ml-auto text-[#a4adba]" /></button></div></div><div className="rounded-[22px] bg-[#e8f1ff] p-5"><div className="mb-3 flex items-center gap-2 text-[#1668e8]"><BookOpen size={17} /><span className="text-xs font-extrabold">오늘의 표현</span></div><p className="text-[17px] font-extrabold leading-7 text-[#233b65]">“I’m just browsing,<br /> thank you.”</p><p className="mt-3 text-[11px] font-semibold text-[#6780a6]">그냥 둘러보는 중이에요.</p><button className="mt-4 flex items-center gap-2 text-[11px] font-extrabold text-[#1668e8]"><Volume2 size={14} /> 발음 듣기</button></div></aside>
      </div>
      {showSettings && <div className="fixed right-5 top-[66px] z-30 w-64 rounded-2xl border border-[#e7eaf0] bg-white p-4 shadow-xl"><div className="flex items-center justify-between"><span className="text-sm font-extrabold">프로필 설정</span><button onClick={() => setShowSettings(false)} aria-label="닫기"><X size={16} /></button></div><div className="mt-4 space-y-3 text-xs font-bold text-[#667286]"><div className="flex justify-between rounded-xl bg-[#f6f8fb] p-3"><span>학습 레벨</span><span className="text-[#1668e8]">Intermediate</span></div><div className="flex justify-between rounded-xl bg-[#f6f8fb] p-3"><span>선호 피드백</span><span className="text-[#1668e8]">부드럽게</span></div></div></div>}
    </main>
  )
}
