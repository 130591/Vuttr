import fs from "fs";
// REAL SERVICE API
import { ToolsApi } from "../services/";

// MOCKS
import toolsApiMocks from "./__mocks__/toolsApi";
// MOCKS RESPONSE JSON
const responseIndex = fs.readFile("./__fixtures__/getToolsResponse");
const responseFilterTags = fs.readFile("./__fixtures__/filterTagsResponse");
const responseFilterTitle = fs.readFile("./__fixtures__/filterTitleResponse");
const getToolsResponse = fs.readFile("./__fixtures__/getToolsResponse");
const dataFake = fs.readFile("./__fixtures__/createToolsDataFake");
const createTools = fs.readFile("./__fixtures__/createToolsResponse");

describe("testing feature filter", () => {
  test("should filter tools for title", async () => {
    const resp = await toolsApiMocks.fakeResquest(responseFilterTitle);

    expect(ToolsApi.searchForTitle("notion")).resolves.toEqual(resp);

    expect(ToolsApi.searchForTitle("notion")).rejects.toEqual(
      Error("Error fetching searchForTitle")
    );
  });

  test("should filter tools for tags", async () => {
    const resp = await toolsApiMocks.fakeResquest(responseFilterTags);

    expect(ToolsApi.searchForTag("node")).resolves.toEqual(resp);

    expect(ToolsApi.searchForTag("node")).rejects.toEqual(
      Error("Error fetching searchForTag")
    );
  });
});

describe("testing crud", () => {
  test("should read and return full data api", async () => {
    const resp = await toolsApiMocks.fakeResquest(responseIndex);

    expect(ToolsApi.index()).resolves.toEqual(resp);

    expect(ToolsApi.index()).rejects.toEqual(
      Error("Error fetching read data")
    );
  });

  test("should create a new tool", async () => {
    const resp = await toolsApiMocks.fakeResquest(createTools);

    expect(ToolsApi.create(dataFake)).resolves.toEqual(resp);

    expect(ToolsApi.create(dataFake)).rejects.toEqual(
      Error("Error fetching create")
    );
  });

  test("should delete a tool", async () => {
    const resp = await toolsApiMocks.fakeResquest({});

    expect(ToolsApi.delete(1)).resolves.toEqual(resp);

    expect(ToolsApi.delete(1)).rejects.toEqual(
      Error("Error fetching delete")
    );
  });
});
