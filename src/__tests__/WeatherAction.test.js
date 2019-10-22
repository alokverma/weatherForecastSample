import mockAxios from '../__mocks__/axios';
import { fetchWeateherFromServer } from '../action/WeatherAction';
import MockStorage from '../__mocks__/mockStorage'

const storageCache = {};
const AsyncStorage = new MockStorage(storageCache);

//jest.setMock('AsyncStorage', AsyncStorage)

it("fetch data from weather api",async()=>{
     // setup
    beforeAll(() => { 
        jest.setMock('@react-native-community/async-storage',AsyncStorage);
      })
    mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
                data: {  }
            })
        ); 
        // work
    const data = await fetchWeateherFromServer()

    // expect
    // expect
    expect(data).toEqual({});
})