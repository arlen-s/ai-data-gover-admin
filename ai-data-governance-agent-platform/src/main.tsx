import React from 'react';
import { createRoot } from 'react-dom/client';
import { AlertTriangle, Bot, BrainCircuit, Database, FileSearch, GitBranch, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './style.css';

const tokenTrend = [
  { day: 'Mon', tokens: 32, cost: 421 }, { day: 'Tue', tokens: 41, cost: 536 }, { day: 'Wed', tokens: 52, cost: 692 },
  { day: 'Thu', tokens: 48, cost: 617 }, { day: 'Fri', tokens: 76, cost: 981 }, { day: 'Sat', tokens: 59, cost: 742 }, { day: 'Sun', tokens: 84, cost: 1094 }
];
const riskBars = [{ name:'PII', value:82 },{ name:'Schema', value:64 },{ name:'权限', value:71 },{ name:'血缘', value:55 },{ name:'质量', value:93 }];
const pie = [{ name:'Policy Agent', value: 38 },{ name:'Lineage Agent', value: 24 },{ name:'Quality Agent', value: 21 },{ name:'Repair Agent', value: 17 }];
const agents = [
  ['隐私识别 Agent','扫描 128 个数据表，发现 37 个疑似敏感字段','running'],
  ['血缘分析 Agent','已生成订单、用户、营销域的跨系统链路图','success'],
  ['质量巡检 Agent','发现 18 条异常波动，正在生成修复建议','warning'],
  ['权限审计 Agent','阻断 6 次越权查询，已同步审计日志','success']
];
function Stat({icon, title, value, sub}:{icon:React.ReactNode,title:string,value:string,sub:string}){return <div className="stat"><div className="statIcon">{icon}</div><div><p>{title}</p><strong>{value}</strong><span>{sub}</span></div></div>}
function App(){return <main className="app"><aside><div className="brand"><Sparkles/>DataMind AI</div><nav><b>控制台</b><span>Agent 编排</span><span>数据地图</span><span>隐私合规</span><span>质量监控</span><span>成本中心</span></nav><div className="sideCard"><Bot/><strong>12 个 Agent 在线</strong><p>自动分析数据资产、权限、质量、血缘与合规风险。</p></div></aside><section className="content"><header><div><p className="eyebrow">Enterprise AI Data Governance Platform</p><h1>AI 数据治理与合规 Agent 平台</h1><p>面向中大型团队的多 Agent 数据资产治理、风险审计与自动修复工作台。</p></div><button>生成本周治理报告</button></header><div className="grid stats"><Stat icon={<BrainCircuit/>} title="日均 Token" value="3,800 万" sub="高峰 6,200 万/天"/><Stat icon={<Database/>} title="治理数据资产" value="12.7 万" sub="表 / API / 文件 / 指标"/><Stat icon={<ShieldCheck/>} title="自动拦截风险" value="1,284" sub="本月合规事件"/><Stat icon={<TrendingUp/>} title="效率提升" value="72%" sub="审计与排查耗时下降"/></div><div className="grid mainGrid"><section className="card wide"><h2>Token 与成本趋势</h2><ResponsiveContainer width="100%" height={260}><AreaChart data={tokenTrend}><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6ee7b7" stopOpacity={0.8}/><stop offset="95%" stopColor="#6ee7b7" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="#1f2937"/><XAxis dataKey="day" stroke="#94a3b8"/><YAxis stroke="#94a3b8"/><Tooltip/><Area type="monotone" dataKey="tokens" stroke="#6ee7b7" fill="url(#g)" name="Token / 百万"/></AreaChart></ResponsiveContainer></section><section className="card"><h2>Agent Token 占比</h2><ResponsiveContainer width="100%" height={260}><PieChart><Pie data={pie} dataKey="value" innerRadius={62} outerRadius={92} paddingAngle={4}>{pie.map((_,i)=><Cell key={i} fill={["#22c55e","#38bdf8","#f59e0b","#ef4444"][i]}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer></section><section className="card"><h2>风险域分布</h2><ResponsiveContainer width="100%" height={260}><BarChart data={riskBars}><CartesianGrid strokeDasharray="3 3" stroke="#1f2937"/><XAxis dataKey="name" stroke="#94a3b8"/><YAxis stroke="#94a3b8"/><Tooltip/><Bar dataKey="value" fill="#60a5fa" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></section><section className="card wide"><h2>实时 Agent 工作流</h2><div className="agentList">{agents.map(([name,desc,status])=><div className={`agent ${status}`} key={name}><GitBranch/><div><strong>{name}</strong><p>{desc}</p></div><span>{status}</span></div>)}</div></section></div><section className="card"><h2><AlertTriangle/> 今日重点风险</h2><div className="risk"><FileSearch/><div><strong>客户画像宽表存在敏感字段跨域引用</strong><p>系统已定位到 marketing_user_profile_v3 的手机号、地理位置字段被 4 个下游报表引用，建议触发脱敏重建与权限复核。</p></div><button>一键生成修复任务</button></div></section></section></main>}

createRoot(document.getElementById('root')!).render(<App/>);
