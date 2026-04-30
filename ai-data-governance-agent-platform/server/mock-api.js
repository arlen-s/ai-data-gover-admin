import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/overview', (_, res) => {
  res.json({
    dailyTokens: 38000000,
    peakTokens: 62000000,
    assets: 127000,
    risksBlocked: 1284,
    efficiencyLift: '72%',
    agentsOnline: 12
  });
});
app.get('/api/risks', (_, res) => {
  res.json([
    { level: 'high', title: '敏感字段跨域引用', table: 'marketing_user_profile_v3' },
    { level: 'medium', title: '指标口径不一致', table: 'order_revenue_summary' },
    { level: 'medium', title: '下游血缘缺失', table: 'user_coupon_detail' }
  ]);
});
app.listen(8787, () => console.log('Mock API running at http://localhost:8787'));
