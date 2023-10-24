(async () => {

  const Queue = require("bull");

  try {

    const addJobsToQueue = (job) => {
      const emailQueue = new Queue("emailQueue", 'redis://127.0.0.1:6379');
    }



    const jobsAray = [];

    jobsAray.forEach((job) => {
      addJobsToQueue(job);
    })


  } catch (error) {
    console.log('Error in the main function', error);
  }
})()