it('should catch any rqeuest', async () => {
  const mock = await browser.mock('**');
  await browser.url('https://google.com');
  await expect(mock).toBeRequested();
});
