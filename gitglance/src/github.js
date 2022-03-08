import polyglot from 'gh-polyglot';
import axios from 'axios';

export const setUser = string => new polyglot(string);

export const getStats = user => {
    user.getAllRepos( (err, stats) => {
        return err || stats;
    })
}

export const getUser = async (user) => {
   return await axios(`https://api.github.com/users/${user}`);
}

