// components/Admin/LoanChart.tsx
"use client";

import { useEffect, useRef } from 'react';

interface LoanChartProps {
  timeRange: string;
}

// Mock chart data - in real app, this would come from API
const chartData = {
  '7d': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    applications: [12, 19, 8, 15, 12, 10, 7],
    approvals: [8, 12, 5, 10, 9, 6, 4],
  },
  '30d': {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    applications: [45, 52, 48, 55],
    approvals: [32, 38, 35, 40],
  },
  '90d': {
    labels: ['Month 1', 'Month 2', 'Month 3'],
    applications: [180, 195, 210],
    approvals: [135, 150, 165],
  },
};

export default function LoanChart({ timeRange }: LoanChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const data = chartData[timeRange as keyof typeof chartData] || chartData['30d'];
    const { labels, applications, approvals } = data;

    // Chart dimensions
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Find max value for scaling
    const maxValue = Math.max(...applications, ...approvals);

    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
    }

    // Draw data lines
    const drawLine = (data: number[], color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = canvas.height - padding - (value / maxValue) * chartHeight;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();
    };

    // Draw data points and area
    const drawArea = (data: number[], color: string) => {
      ctx.fillStyle = color + '20';
      ctx.beginPath();

      data.forEach((value, index) => {
        const x = padding + (chartWidth / (data.length - 1)) * index;
        const y = canvas.height - padding - (value / maxValue) * chartHeight;
        
        if (index === 0) {
          ctx.moveTo(x, canvas.height - padding);
        }
        ctx.lineTo(x, y);
        if (index === data.length - 1) {
          ctx.lineTo(x, canvas.height - padding);
        }
      });

      ctx.closePath();
      ctx.fill();
    };

    // Draw areas first
    drawArea(applications, '#3b82f6'); // Blue
    drawArea(approvals, '#10b981'); // Green

    // Then draw lines
    drawLine(applications, '#3b82f6');
    drawLine(approvals, '#10b981');

    // Draw labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';

    labels.forEach((label, index) => {
      const x = padding + (chartWidth / (labels.length - 1)) * index;
      ctx.fillText(label, x, canvas.height - padding + 20);
    });

    // Draw legend
    ctx.textAlign = 'left';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('Applications', canvas.width - 120, padding - 10);
    ctx.fillStyle = '#10b981';
    ctx.fillText('Approvals', canvas.width - 120, padding + 10);

  }, [timeRange]);

  return (
    <div className="w-full">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={300}
        className="w-full h-48"
      />
    </div>
  );
}