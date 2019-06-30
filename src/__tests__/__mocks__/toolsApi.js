class toolsApi {
  static async fakeResquest(data) {
    return await jest.fn().mockImplementation(() => ({
      status: 200,
      data: () =>
        new Promise((resolve, reject) => {
          resolve(data);
        })
    }));
  }
}

export default toolsApi;
