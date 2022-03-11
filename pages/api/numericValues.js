// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { value: '1', description: 'Valor 1' },
    { value: '2', description: 'Valor 2' },
    { value: '3', description: 'Valor 3' },
    { value: '4', description: 'Valor 4' },
  ])
}
